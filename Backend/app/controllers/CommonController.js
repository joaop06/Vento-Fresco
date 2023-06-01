const modelsFn = require('../models')
import { Op } from 'sequelize'


export default class CommonController {
  constructor(ServiceClass, modelAttrs, modelName, optFn = () => { }) {
    this.models = modelsFn()
    this.modelName = modelName
    if (ServiceClass && modelName) {
      this.service = new ServiceClass(modelName, this.models, optFn(this.models))
    }
    this.modelAttrs = modelAttrs || []
  }


  async findAndCountAll(req, res, next) {
    let transaction
    try {
      const options = await this.treatRequestQuery(req)
      // transaction = await this.models.sequelize.transaction()

      let result = []
      result = await this.service.findAndCountAll(req, { transaction, ...options })
      // await transaction.commit()
      return res.status(200).send({ rows: result.rows, totalRecords: result.count, resultCount: result.rows.length })
    } catch (e) {
      if (transaction) await transaction.rollback()
      console.log(e)
      next(e)
    }
  }

  async create(req, res, next) {
    let transaction
    try {
      transaction = await this.models.sequelize.transaction()
      let result = await this.service.create(req.body, req, { transaction })
      if (result && typeof result.toJSON == 'function') result = result.toJSON()

      if (result.validation) await transaction.rollback()
      else await transaction.commit()
      result.User = req.user
      return res.status(200).send({ ...result, success: result.validation ? false : true, message: result.message ? result.message : result.validation ? 'Erro ao cadastrar!' : 'Sucesso ao cadastrar!' })
    } catch (e) {
      console.log(e)
      if (transaction) await transaction.rollback()
      next(e)
    }
  }

  async update(req, res, next) {
    let transaction
    try {
      transaction = await this.models.sequelize.transaction()
      let result = await this.service.update(req.body, req, { transaction })
      await transaction.commit()

      if (result.message)
        return res.status(200).send({ ...result, success: result.result[0] == 1 })

      return res.status(200).send({ result: result[1] || {}, success: result[0] == 1, message: result[0] == 1 ? 'Sucesso ao editar!' : 'Erro ao editar!' })
    } catch (e) {
      console.log(e)
      if (transaction) await transaction.rollback()
      next(e)
    }
  }

  async destroy(req, res, next) {
    let transaction
    try {
      transaction = await this.models.sequelize.transaction()
      const result = await this.service.destroy(req.query.id, req)
      await transaction.commit()
      return res.status(200).send({ ...result, success: result == 1, message: result == 1 ? 'Sucesso ao deletar!' : 'Erro ao deletar!' })
    } catch (e) {
      console.log(e)
      if (transaction) await transaction.rollback()
      next(e)
    }
  }
}
