const express = require("express")
const router = express.Router()
const ventofrescoController = require("../controllers/ventofrescoController")
this.ventofrescoController = new ventofrescoController()

    router.get('/home', this.ventofrescoController.findAll)


    router.post('/client', this.ventofrescoController.createClient)

module.exports = router