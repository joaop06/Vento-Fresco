import ClientsController from '../controllers/ClientsController'
import CommonRoute from './CommonRoute'

export default class ClientsRoute extends CommonRoute {
  constructor(app) {
    super(ClientsController, app, 'clients')
  }

  

  setupRoutes() {
    super.setupRoutes()
    this.app.post('/clients/login', this.ClientsController.login)
    this.app.post('/clients/register', this.ClientsController.register)
  }
}