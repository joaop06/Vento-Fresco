const express = require("express")
const app = express()
const router = express.Router()
const cors = require("cors")
const connection = require("./app/data/data")
const jwtOptions = {
    expiresIn: "1h",
    issuer: "https://www.example.com",
    audience: "https://www.example.com"
}

connection.connect((err) => {
    if (err) throw err
    console.log("Connected to DB")
})

module.exports = router


app.listen(8080, () => {
    console.log("Server is running on port 8080")
})

