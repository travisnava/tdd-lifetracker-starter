const express = require("express")
const cors = require("cors")
const morgan = require("morgan")
const { NotFoundError } = require("./utils/errors")
const security = require("./middleware/security")

const authRoutes = require("./routes/auth")
const nutritionRoutes = require("./routes/nutrition")


const app = express()

//enables cross-origin resource sharing for all origins
app.use(cors())

//parse incoming request bodies with JSON paylods
app.use(express.json())

//log request info
app.use(morgan("tiny"))

//for every request, check if a token exists
//in the authorization header
//if it does, attach the decoded user to res.locals
app.use(security.extractUserFromJwt)

app.use("/auth", authRoutes)
app.use("/nutrition", nutritionRoutes)


// health check
app.get('/', (req, res) => {
    res.status(200).json({ "ping" : "pong" })
  })

app.use((req, res, next) => {
    return next(new NotFoundError())
})

app.use((err, req, res, next) => {
    const status = err.status || 500
    const message = err.message

    return res.status(status).json({
        error: {message, status},
    })
})





  module.exports = app