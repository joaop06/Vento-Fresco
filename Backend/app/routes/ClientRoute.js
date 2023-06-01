import ClientController from '../controllers/ClientController'
import CommonRoute from './CommonRoute'

export default class ClientRoute extends CommonRoute {
  constructor(app) {
    super(ClientController, app, 'client')
  }

  setupRoutes() {
    super.setupRoutes()
  }
}