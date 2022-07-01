const express = require("express")
const router = express.Router()




router.get("/", async (req, res, next) => {
    try {
        //send json response to client with all of the user-owned nutrition instances in an array
    }
    catch(err) {
        next(err)
    }
})


router.post("/", async (req, res, next) => {
    try {
        // accept request body with one nutrition key containing an object with all attributes of a nutrition entry
    }
    catch(err) {
        next(err)
    }
})

router.get("/:nutritionId", async (req, res, next) => {
    try {
        //send json response back to client with nutrition instance that matches the nutritionId paramter
    }
    catch(err) {
        next(err)
    }
})



module.exports = router