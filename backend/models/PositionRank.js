const { Sequelize, DataTypes, Model } = require('sequelize');

const sequelize = new Sequelize('fantasy_football', 'postgres', 'ProRight50!', {
  host: 'localhost',
  port: 5432,
  dialect: 'postgres'
});

class PositionRank extends Model {}

PositionRank.init({
  Team: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  qb_rank: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  rb_rank: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  wr_rank: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  te_rank: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  k_rank: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  dst_rank: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
}, {
  sequelize,
  modelName: 'PositionRank'
});

module.exports = PositionRank;
