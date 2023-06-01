
import ClientsAttr from './ClientsAttr'

module.exports = function (sequelize, DataTypes) {
  const attrs = ClientsAttr(DataTypes)
  return sequelize.define('Clients', attrs, {
    tableName: 'clients',
    paranoid: true,
    underscored: true,
    timestamps: true
  })
}
