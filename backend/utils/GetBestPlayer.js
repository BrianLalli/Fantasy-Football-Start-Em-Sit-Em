const getBestPlayer = async (playerDataArray) => {
  try {
    if (!playerDataArray || playerDataArray.length === 0) {
      return null;
    }

    // Sort the player data array based on criteria
    playerDataArray.sort((a, b) => {
      if (a.position_rank < b.position_rank) return -1; // Lower rank is better
      if (a.position_rank > b.position_rank) return 1;
      
      if (a.avg_fantasy_points > b.avg_fantasy_points) return -1; // Higher points as a tie-breaker
      if (a.avg_fantasy_points < b.avg_fantasy_points) return 1;
      
      return 0;
    });

    return playerDataArray[0]; // The first element will be the best player based on the criteria
  } catch (err) {
    console.error('Error in getBestPlayer:', err);
    return null;
  }
};

module.exports = getBestPlayer;
