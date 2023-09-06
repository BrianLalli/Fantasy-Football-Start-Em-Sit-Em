const getPlayerData = require('./GetMultiplePlayers');

const getMultiplePlayers = async (playerName1, playerName2, weekNumber) => {
  try {
    const playerData1 = await getPlayerData(playerName1, weekNumber);
    const playerData2 = await getPlayerData(playerName2, weekNumber);

    if (!playerData1 || !playerData2) {
      return null;
    }

    return [playerData1, playerData2];
  } catch (err) {
    console.error('Error in getMultiplePlayers:', err);
    return null;
  }
};

module.exports = getMultiplePlayers;
