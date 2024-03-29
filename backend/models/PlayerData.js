const { Sequelize, DataTypes, Model } = require('sequelize');

const sequelize = new Sequelize('fantasy_football', 'postgres', 'ProRight50!', {
  host: 'localhost',
  port: 5432,
  dialect: 'postgres'
});

class PlayerData extends Model {}

PlayerData.init({
  player_name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  team_name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  player_position: {
    type: DataTypes.STRING,
    allowNull: false
  },
  opponent_name: {
    type: DataTypes.STRING,
    allowNull: true
  },
  avg_fantasy_points: {
    type: DataTypes.FLOAT,
    allowNull: true
  },
  position_rank: {
    type: DataTypes.INTEGER,
    allowNull: true
  }
}, {
  sequelize,
  modelName: 'PlayerData'
});

module.exports = PlayerData;
