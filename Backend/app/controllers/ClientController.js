import ClientService from '../services/ClientService'
import CommonController from './CommonController'

export default class ClientController extends CommonController {
  constructor() {
    const attrs = require('../models/ClientAttr')
    super(ClientService, attrs(), 'Client')
  }
}
