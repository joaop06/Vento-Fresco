const express = require("express")
const app = express()
const cors = require("cors")
const connection = require("./src/data/data")

app.use(express.json())
app.use(cors())

app.listen(8080, () => {
    console.log("Server is running in port 8080")
})

connection.connect(function (err){
    console.log("Connection DataBase sucess!")
})

const indexRouter = require("./src/routes/index")
app.use('/', indexRouter)
const ventofrescoRouter = require("./src/routes/ventofrescoRouter")
app.use('/', ventofrescoRouter)

module.exports = app