const { PositionRank } = require('../models');

const getPositionRank = async (opponent_name, player_position) => {
  try {
    const positionData = await PositionRank.findOne({
      where: {
        Team: opponent_name
      },
      attributes: [`${player_position.toLowerCase()}_rank`]
    });

    if (!positionData) {
      throw new Error(`No data found for opponent: ${opponent_name} and position: ${player_position}`);
    }

    return positionData[`${player_position.toLowerCase()}_rank`];
  } catch (error) {
    throw new Error(`Failed to fetch position rank: ${error}`);
  }
};

module.exports = getPositionRank;
