const { Schedule } = require('../models');

const getCurrentWeekOpponent = async (team_name, week_number) => {
  try {
    const weekColumn = `week_${week_number}`;
    const scheduleData = await Schedule.findOne({
      where: {
        team: team_name
      },
      attributes: [weekColumn]
    });

    if (scheduleData) {
      return scheduleData[weekColumn];
    }
    return null;

  } catch (error) {
    console.error("Error fetching current week opponent:", error);
    return null;
  }
};

module.exports = getCurrentWeekOpponent;
