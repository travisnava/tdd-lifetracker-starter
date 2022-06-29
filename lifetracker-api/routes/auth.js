const express = require("express")
const router = express.Router()

router.post("/login", async(req, res, next) => {
    try {
        // take users email and pass, attempt to authenticate
    }
    catch (err){
        next(err)
    }
})

router.post("/register", async(req, res, next) => {
    try {
        // take users info
        // create new user in database
    }
    catch (err){
        next(err)
    }
})

module.exports = router