const express = require("express")
const app = express()
const router = express.Router()
const cors = require("cors")
const mysql = require("mysql2")
const jwt = require("jsonwebtoken")
const jwtSecret = "secret"

const jwtOptions = {
    expiresIn: "1h",
    issuer: "https://www.example.com",
    audience: "https://www.example.com"
}

const jwtMiddleware = (req, res, next) => {
    const authHeader = req.headers.authorization
    if (authHeader) {
        const token = authHeader.split(" ")[1]
        if (token) {
            jwt.verify(token, jwtSecret, jwtOptions, (err, decoded) => {
                if (err) {
                    return res.status(401).json({
                        error: "Invalid Token"
                    })
                }
                req.user = decoded
                next()
            })
        } else {
            return res.status(401).json({
                error: "Invalid Token"
            })
        }
    } else {
        return res.status(401).json({
            error: "Invalid Token"
        })
    }
}

const db = mysql.createConnection({
    host: "localhost",
    user: "ventofresco",
    password: "ventofresco@",
    database: "ventofresco"
})
db.connect((err) => {
    if (err) throw err
    console.log("Connected to DB")
})

module.exports = router


app.listen(8080, () => {
    console.log("Server is running on port 8080")
})









app.get('/', (req, res) => {
    console.log("Hello Word!")
    res.status(200).send("Hello Word!")
})
