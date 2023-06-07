const express = require("express")
const router = express.Router()
const ventofrescoController = require("../controllers/ventofrescoController")
this.ventofrescoController = new ventofrescoController()

    /* Users */
    router.post('/users/login', this.ventofrescoController.findUsersLogin)
    router.post('/users', this.ventofrescoController.createUsers)

    /* Products */
    router.post('/products/admin', this.ventofrescoController.createProducts)
    router.put('/products/admin', this.ventofrescoController.updateProducts)
    router.delete('/products/admin', this.ventofrescoController.deleteProducts)
    router.get('/products', this.ventofrescoController.findAllProducts)

    /* Requests */
    router.get('/requests/admin', this.ventofrescoController.findAllRequests)
    router.get('/requests', this.ventofrescoController.findAllClientRequests)
    router.post('/requests', this.ventofrescoController.createRequests)
    router.delete('/requests', this.ventofrescoController.deleteRequests)

    /* Clients */
    router.get('/clients/admin', this.ventofrescoController.findAllClients)
    router.post('/clients/login', this.ventofrescoController.findClientLogin)
    router.post('/clients/register', this.ventofrescoController.createClients)
    router.put('/clients', this.ventofrescoController.updateClients)


module.exports = router