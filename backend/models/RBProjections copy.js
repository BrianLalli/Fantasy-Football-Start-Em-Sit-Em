const { Sequelize, DataTypes, Model } = require('sequelize');

const sequelize = new Sequelize('fantasy_football', 'postgres', 'ProRight50!', {
  host: 'localhost',
  port: 5432,
  dialect: 'postgres'
});

class RBProjection extends Model {}

RBProjection.init({
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
  modelName: 'RBProjection'
});

module.exports = RBProjection;
