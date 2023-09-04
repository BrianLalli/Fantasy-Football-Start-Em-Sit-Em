const { Sequelize, Model, DataTypes } = require('sequelize');

const sequelize = new Sequelize('fantasy football', 'postgres', 'ProRight50!', {
  host: 'localhost',
  dialect: 'postgres'
});

class Schedule extends Model {}

Schedule.init({
  team: DataTypes.STRING,
  week_1: DataTypes.STRING,
  week_2: DataTypes.STRING,
  week_3: DataTypes.STRING,
  week_4: DataTypes.STRING,
  week_5: DataTypes.STRING,
  week_6: DataTypes.STRING,
  week_7: DataTypes.STRING,
  week_8: DataTypes.STRING,
  week_9: DataTypes.STRING,
  week_10: DataTypes.STRING,
  week_11: DataTypes.STRING,
  week_12: DataTypes.STRING,
  week_13: DataTypes.STRING,
  week_14: DataTypes.STRING,
  week_15: DataTypes.STRING,
  week_16: DataTypes.STRING,
  week_17: DataTypes.STRING,
  week_18: DataTypes.STRING
}, {
  sequelize,
  modelName: 'Schedule'
});

module.exports = Schedule;
