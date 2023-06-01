
export default class CommonRoute {
  constructor(ControllerClass, app, entityName) {
    this.controller = new ControllerClass()
    this.app = app
    this.entityName = entityName ? entityName.replace('_', '-') : undefined

    this.setupRoutes()
  }


  setupRoutes() {
    this.app.get(`/${this.entityName}`, this.controller.findAndCountAll.bind(this.controller))
    this.app.post(`/${this.entityName}`, this.controller.create.bind(this.controller))
    this.app.put(`/${this.entityName}`, this.controller.update.bind(this.controller))
    this.app.delete(`/${this.entityName}`, this.controller.destroy.bind(this.controller))
  }
}
