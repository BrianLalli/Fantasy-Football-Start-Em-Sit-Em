const { DataTypes, Model } = require('sequelize');
const sequelize = require('../config/database');

class BestPlayer extends Model {}

BestPlayer.init(
  {
    player_name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    team_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    weekNumber: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    opponent_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    position: {
      type: DataTypes.STRING,
      allowNull: false
    },
    avg_fantasy_points: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    position_rank: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'bestPlayer',
  }
);

module.exports = BestPlayer;
