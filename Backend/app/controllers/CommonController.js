import CompaniesService from '../services/CompaniesService'
import CommonController from './CommonController'

export default class CompaniesController extends CommonController {
  constructor() {
    const attrs = require('../models/CompaniesAttr')
    super(CompaniesService, attrs(), 'Companies')
  }
}
