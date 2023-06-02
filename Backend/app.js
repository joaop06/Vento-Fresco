const express = require("express")
const app = express()
const cors = require("cors")

app.use(express.json())
app.use(cors())

app.listen(8080, () => {
    console.log("Server is running in port 8080")
})


const indexRouter = require("./src/routes/index")
app.use('/', indexRouter)
const ventofrescoRouter = require("./src/routes/ventofrescoRouter")
app.use('/', ventofrescoRouter)

module.exports = app