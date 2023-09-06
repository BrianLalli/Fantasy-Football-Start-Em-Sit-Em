const BestPlayer = require('./GetBestPlayer');

const getBestPlayer = async (weekNumber, position) => {
  try {
    const bestPlayer = await BestPlayer.findAll({
      where: {
        weekNumber,
        position
      },
      order: [
        ['position_rank', 'ASC'], // Lowest number first for best rank
        ['avg_fantasy_points', 'DESC'] // Highest number first as tie-breaker
      ]
    });

    if (!bestPlayer || bestPlayer.length === 0) {
      return null;
    }

    return bestPlayer[0]; // Return the first result after sorting
  } catch (err) {
    console.error('Error in getBestPlayer:', err);
    return null;
  }
};

module.exports = getBestPlayer;
