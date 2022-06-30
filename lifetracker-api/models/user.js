const bcrypt = require("bcrypt")
const db = require("../db")
const { BCRYPT_WORK_FACTOR } = require("../config")

const { UnauthorizedError, BadRequestError } = require("../utils/errors")

class User {




    static async makePublicUser(user) {
        return {
            id: user.id,
            email: user.email,
            firstName: user.first_name,
            lastName: user.last_name,
            created_at: user.created_at

        }
    }




    static async login(credentials) {
        //user submit their email and pass
        //if any fields missing, throw an error
        const requiredFields = ["password", "email"]
        requiredFields.forEach(field => {
            if (!credentials.hasOwnProperty(field)) {
             throw new BadRequestError(`Missing ${field} in request body.`)
            }
        })
        //look up the user in db by email
        const user = await User.fetchUserByEmail(credentials.email)
        //if user is found, compare submitted passwords with pass in db
        //if match, then return the user
        if (user){
            const isValid = await bcrypt.compare(credentials.password, user.password)
            if (isValid){
                return User.makePublicUser(user)
            }
        }
        //if anything goes wrong, throw an error
        throw new UnauthorizedError("Invalid email/password combination")
    }


    static async register(credentials) {

        //user submits their info
        //any field is missing then throw err
        const requiredFields = ["email", "username", "firstName", "lastName", "password", "passwordConfirm"]
        requiredFields.forEach(field => {
            if (!credentials.hasOwnProperty(field)) {
                throw new BadRequestError(`Missing ${field} in request body`)
            }
        })

        if (credentials.email.indexOf("@") <= 0){
            throw new BadRequestError("Invalid email.")
        }

        //make sure no duplicates exist with same email in db
        // throw err if yes
        const existingUser = await User.fetchUserByEmail(credentials.email)
        if (existingUser) {
            throw new BadRequestError(`Duplicate email: ${credentials.email}`)
        }        
        const lowercasedEmail = credentials.email.toLowerCase()
        //take users pass, hash it
        const hashedPassword = await bcrypt.hash(credentials.password, BCRYPT_WORK_FACTOR)
        //take users email, lowercase it

        //create a new user in the db with all the info
        //return the user
        const result = await db.query(`
        INSERT INTO users(
            username,
            password,
            first_name,
            last_name,
            email
            
        )
        VALUES ($1, $2, $3, $4, $5)
        RETURNING id, username, password, first_name, last_name, email, created_at;
    
    `, [credentials.username, hashedPassword, credentials.firstName, credentials.lastName, lowercasedEmail])

    const user = result.rows[0]
    return User.makePublicUser(user)

    }







    static async fetchUserByEmail(email){
        if (!email){
            throw new BadRequestError("No email provided")
        }

        const query = `SELECT * FROM users WHERE email = $1`
        const result = await db.query(query, [email.toLowerCase()])
        const user = result.rows[0]
        return user
    }







}



module.exports = User