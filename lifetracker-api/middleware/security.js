const bcrypt = require("bcrypt")
const { BCRYPT_WORK_FACTOR } = require("../config")


const pw = "supersecretpassword"


bcrypt.hash(pw, BCRYPT_WORK_FACTOR, (err, hashedPw) => {
    console.log(`Password is ${pw}`)
    console.log(`Hashed Password is ${hashedPw}`)
})