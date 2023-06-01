import Config from '../config/config'

const fs = require('fs')
const path = require('path')
const Sequelize = require('sequelize')
const basename = path.basename(__filename)

var db = {}

function readModelAttrs() {
  db.modelAttrs = []
  fs
    .readdirSync(__dirname)
    .filter(file => (
      file.includes('Attr') &&
      file.indexOf('.') !== 0) &&
      (file !== basename) &&
      (file.slice(-3) === '.js')
    )
    .forEach(file => {
      db.modelAttrs.push(file)
    })
}

function getInstance() {
  return new Promise((resolve, reject) => {

    const sequelize = new Sequelize(
      Config.db.database,
      Config.db.user,
      Config.db.password, {
      dialectOptions: {
        connectTimeout: 180000
      },
      pool: {
        max: 60,
        min: 5,
        idle: 10000,
        acquire: 50000,
      },
      host: Config.db.host,
      warnings: false,
      logging: process.env.SEQUELIZE_LOG === 'true' || process.env.NODE_ENV != 'production',
      dialect: Config.db.dialect,
      port: Config.db.port
    })

    // const PaperTrail = require('sequelize-paper-trail').init(sequelize, {
    //   mysql: true,
    //   tableUnderscored: true,
    //   underscored: true,
    //   underscoredAttributes: true,
    //   tableName: 'revisions',
    //   debug: process.env.NODE_ENV != 'production' && process.env.LOG_PAPERTRAIL === 'true'
    // })

    // PaperTrail.defineModels()

    readModelAttrs()

    fs
      .readdirSync(__dirname)
      .filter(file => (
        !file.includes('Attr') &&
        file.indexOf('.') !== 0) &&
        (file !== basename) &&
        (file !== 'Revision') &&
        (file.slice(-3) === '.js')
      )
      .forEach(file => {
        const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
        db[model.name] = model;

        // if (['DiffReport', 'Revision'].every(el => !model.name.includes(el))) {
        //   console.log('name ' + model.name)
        //   db[model.name].Revisions = db[model.name].hasPaperTrail()
        // }
      })

    Object.keys(db).forEach(modelName => {
      if (db[modelName].associate) {
        db[modelName].associate(db)
      }
    })


    // db.PurchaseControl.hasMany(db.PurchaseControlProduct, { foreignKey: 'order_id' })
    // db.PurchaseControlProduct.belongsTo(db.PurchaseControl, { foreignKey: 'order_id' })


    sequelize.sync({ force: db.force === true })
      .then(function () {
        if (typeof db.finishCbFn == 'function') {
          console.log('db.finishCbFn(db)')
          db.finishCbFn(db)
          console.log('db.finishCbFn(db)')
        }
        console.log('syncronized?  sequelize ', typeof db.finishCbFn)
      })
      .catch(err => {
        console.log('log err called', err)
        typeof db.catchFinishCbFn == 'function' ? db.catchFinishCbFn() : console.log(err)
      })

    db.sequelize = sequelize
    db.Sequelize = Sequelize
    return resolve(db)
  })
}
// sequelize.sync();

module.exports = (finishCbFn, catchFinishCbFn, force) => {

  Object.defineProperty(db, 'force', { value: force == 'true' })
  if (typeof finishCbFn == 'function' && !db.finishCbFn) {
    Object.defineProperty(db, 'finishCbFn', {
      value: finishCbFn
    })
  }
  if (typeof catchFinishCbFn == 'function' && !db.catchFinishCbFn) {
    Object.defineProperty(db, 'catchFinishCbFn', {
      value: catchFinishCbFn
    })
  }
  if (db.sequelize) return db
  else return getInstance()
}
