const { Sequelize, DataTypes, Model } = require('sequelize');

const sequelize = new Sequelize('fantasy_football', 'postgres', 'ProRight50!', {
  host: 'localhost',
  port: 5432,
  dialect: 'postgres'
});


class AvgFPTS extends Model {}

AvgFPTS.init({
  team: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  qb_avg_pts: {
    type: DataTypes.FLOAT,
    allowNull: true
  },
  rb_avg_pts: {
    type: DataTypes.FLOAT,
    allowNull: true
  },
  wr_avg_pts: {
    type: DataTypes.FLOAT,
    allowNull: true
  },
  te_avg_pts: {
    type: DataTypes.FLOAT,
    allowNull: true
  },
  k_avg_pts: {
    type: DataTypes.FLOAT,
    allowNull: true
  },
  dst_avg_pts: {
    type: DataTypes.FLOAT,
    allowNull: true
  }
}, {
  sequelize,
  modelName: 'AvgFPTS'
});

module.exports = AvgFPTS;
