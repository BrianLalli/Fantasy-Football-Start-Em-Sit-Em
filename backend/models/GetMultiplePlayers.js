const { DataTypes, Model } = require("sequelize");
const sequelize = require("../config/database");

class MultiplePlayerData extends Model {}

MultiplePlayerData.init(
  {
    playerName1: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    teamName1: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    playerName2: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    teamName2: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    weekNumber: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    playerPosition1: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    playerPosition2: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    opponent_name1: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    opponent_name2: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    avg_fantasy_points1: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    avg_fantasy_points2: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
    position_rank1: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    position_rank2: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "multiplePlayerData",
  }
);

module.exports = MultiplePlayerData;
