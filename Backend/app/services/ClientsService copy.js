import CommonService from './CommonService'
import { Op } from 'sequelize'

export default class CompaniesService extends CommonService {
  constructor(repository, models) {
    super(repository, models)
  }

  async create(Companies, req, options) {
    Companies.id = Companies.erp_id
    return await super.create(Companies, req, options)
  }

  async update(Companies, options) {
    if ([1, '1', 'true', true].includes(Companies.preferencial_invoice)) {
      await super.update({ preferencial_invoice: 0, preferencial_invoice_at: null, preferencial_invoice_until: null, },
        {
          where: { id: { [Op.ne]: Companies.id } }
        }
      )
    }

    return await super.update(Companies, options)
  }

}