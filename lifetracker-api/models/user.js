const { UnauthorizedError } = require("../utils/errors")

class User {
    static async login(credentials) {
        //user submits email and pass
        //if any fields are missing, throw err
        //
        //lookup user ini db by email
        //if user is found, compare submitted passwords with pass in db
        //if match, return the user

        //if anything goes wrong, throw err
        throw new UnauthorizedError("Invalid email/password combination")
    }


    static async register(credentials) {

        //user submits their info
        //any field is missing then throw err

        //make sure no duplicates exist with same email in db
        // throw err if yes

        //take users pass, hash it
        //take users email, lowercase it

        //create a new user in the db with all the info
        //return the user

    }
}



module.exports = User