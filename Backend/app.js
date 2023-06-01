const express = require("express")
const app = express()
const router = express.Router()
const cors = require("cors")


//import AccessControl from './app/access-control/AccessControl'
// Controle de acesso, permissões de usuário
//app.use(AccessControl)
app.use(express.json())
app.use(cors())

app.listen(8080, () => {
    console.log("Server is running on port 8080")
})

module.exports = router