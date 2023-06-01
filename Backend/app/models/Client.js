/* jshint indent: 2 */

import ClientAttr from './ClientAttr'

module.exports = function (sequelize, DataTypes) {
  const attrs = ClientAttr(DataTypes)
  return sequelize.define('Client', attrs, {
    tableName: 'client',
    paranoid: true,
    underscored: true,
    timestamps: true
  })
}
