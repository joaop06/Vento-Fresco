export default class CommonService {
  constructor(modelName, models, repositoryName) {
    this.modelName = modelName
    this.models = models
  }

  async findAndCountAll(req, options = {
    where: req.query.id ? { id: req.query.id } : undefined
  }) {
    if (options.order != undefined) {
      options.order = options.order.length == 0 ? [[this.models[this.modelName].primaryKeyAttribute, 'desc']] : options.order
    }

    if (options.include) {
      options.distinct = true;
    }
    return this.models[this.modelName].findAndCountAll(options)
  }

  async create(object, req, options = {}) {
    return this.models[this.modelName].create(object, { ...options, individualHooks: true })
  }

  async update(object, req, options = { where: {} }) {
    return this.models[this.modelName].update(object, {
      ...options, where: ([null, undefined].includes(object.id) && [null, undefined].includes(options.where.id)) ? { ...options.where } : { ...options.where, id: object.id || options.where.id },
      individualHooks: true
    })
  }

  async destroy(id, req, options) {
    return this.models[this.modelName].destroy({ where: { id: id }, ...options, individualHooks: true })
  }
}
