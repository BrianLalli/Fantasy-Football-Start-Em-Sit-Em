const { Sequelize, DataTypes, Model } = require('sequelize');

const sequelize = new Sequelize('fantasy football', 'postgre', 'ProRight50!', {
    host: 'localhost',
  dialect: 'postgres'
});

class KProjection extends Model {}

KProjection.init({
  player: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  team: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  sequelize,
  modelName: 'KProjection'
});

module.exports = KProjection;
