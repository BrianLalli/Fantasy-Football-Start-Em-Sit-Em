const BestPlayer = require('./GetBestPlayer');

const getBestPlayer = async (weekNumber, position) => {
  console.log(`Debug: getBestPlayer called with weekNumber=${weekNumber} and position=${position}`);

  try {
    const bestPlayer = await BestPlayer.findAll({
      where: {
        weekNumber,
        position
      },
      order: [
        ['position_rank', 'ASC'],
        ['avg_fantasy_points', 'DESC']
      ]
    });

    console.log('Debug: Query result:', bestPlayer); // This will print the entire array, which might be big

    if (!bestPlayer || bestPlayer.length === 0) {
      console.log('Debug: No bestPlayer found');
      return null;
    }

    console.log('Debug: Best player found:', bestPlayer[0]);
    return bestPlayer[0]; // Return the first result after sorting
  } catch (err) {
    console.error('Error in getBestPlayer:', err);
    return null;
  }
};

module.exports = getBestPlayer;
