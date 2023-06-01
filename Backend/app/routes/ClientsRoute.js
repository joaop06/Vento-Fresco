import ClientsController from '../controllers/ClientsController'
import CommonRoute from './CommonRoute'

export default class ClientsRoute extends CommonRoute {
  constructor(app) {
    super(ClientsController, app, 'clients')
  }

  setupRoutes() {
    super.setupRoutes()
  }
}