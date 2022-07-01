const express = require("express")
const Nutrition = require("../models/nutrition")
const security = require("../middleware/security")
const router = express.Router()




router.get("/", async (req, res, next) => {
    try {
        //send json response to client with all of the user-owned nutrition instances in an array

        const nutritions = await Nutrition.listNutritionForUser()
        return res.status(201).json({ nutritions })
    }
    catch(err) {
        next(err)
    }
})


router.post("/", security.requireAuthenticatedUser, async (req, res, next) => {
    try {
        // accept request body with one nutrition key containing an object with all attributes of a nutrition entry
        const { user } = res.locals
        const nutrition = await Nutrition.createNutrition({nutrition: req.body, user})
        return res.status(201).json({ nutrition })
    }
    catch(err) {
        next(err)
    }
})

router.get("/:nutritionId", async (req, res, next) => {
    try {
        //send json response back to client with nutrition instance that matches the nutritionId paramter
        const { nutritionId } = req.params
        const nutrition = await Nutrition.fetchNutritionById(nutritionId)
        return res.status(200).json({ nutrition })
    }
    catch(err) {
        next(err)
    }
})



module.exports = router