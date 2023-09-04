const { PositionRank } = require('../models');

const getAverageFantasyPoints = async (opponent_name, player_position) => {
  try {
    const positionData = await PositionRank.findOne({
      where: {
        Team: opponent_name
      },
      attributes: [`${player_position.toLowerCase()}_avg_pts`]
    });

    if (!positionData) {
      throw new Error(`No data found for opponent: ${opponent_name} and position: ${player_position}`);
    }

    return positionData[`${player_position.toLowerCase()}_avg_pts`];
  } catch (error) {
    throw new Error(`Failed to fetch average fantasy points: ${error}`);
  }
};

module.exports = getAverageFantasyPoints;
