/* jshint indent: 2 */

module.exports = (DataTypes) => {
  return {
    id: {
      editable: false,
      type: DataTypes ? DataTypes.INTEGER(20) : 'number',
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      label: 'ID'
    },
    name: {
      type: DataTypes ? DataTypes.STRING(150) : 'string',
      allowNull: false,
      label: 'Nome'
    },
    email: {
      type: DataTypes ? DataTypes.STRING(250) : 'string',
      allowNull: false,
      label: 'E-mail'
    },
    password: {
      type: DataTypes ? DataTypes.STRING(45) : 'string',
      allowNull: false,
      label: 'Senha'
    },
    cell_phone: {
      type: DataTypes ? DataTypes.INTEGER(11) : 'number',
      allowNull: true,
      label: 'Celular'
    },
    adress_id_fk: {
      type: DataTypes ? DataTypes.INTEGER() : 'number',
      allowNull: false,
      label: 'ID Endereço'
    },
    cart: {
      type: DataTypes ? DataTypes.DATE : 'date',
      allowNull: true,
      label: 'Preferencial até'
    }
  }
}
