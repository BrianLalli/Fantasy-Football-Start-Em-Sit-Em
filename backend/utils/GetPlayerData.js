const PlayerData = require('../models/PlayerData');

const getPlayerData = async (playerName, weekNumber) => {
  try {
    const playerData = await PlayerData.findOne({
      where: {
        player_name: playerName
      }
    });

    if (!playerData) {
      return null;
    }

    // Perform other logic to filter by weekNumber if needed
    // ... 
    
    return playerData;
  } catch (err) {
    console.error('Error in getPlayerData:', err);
    return null;
  }
};

module.exports = getPlayerData;
