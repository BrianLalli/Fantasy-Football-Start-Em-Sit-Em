const { Schedule } = require('./Schedule');

async function getCurrentWeekOpponent(teamName, weekNumber) {
  const weekColumnName = `week_${weekNumber}`;
  const schedule = await Schedule.findOne({
    attributes: [weekColumnName],
    where: {
      team: teamName,
    }
  });

  return schedule ? schedule[weekColumnName] : null;
}

module.exports = getCurrentWeekOpponent;
