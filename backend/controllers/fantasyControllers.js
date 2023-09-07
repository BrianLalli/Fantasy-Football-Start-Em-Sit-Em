const fantasyController = {
  async getPlayerData(req, res) {
    console.log(`Controller: Inside getPlayerData for ${req.params.name}`);
    const playerData = await GetPlayerData(req.params.name);
    res.json(playerData);
  },
  async getMultiplePlayers(req, res) {
    console.log(`Controller: Inside getMultiplePlayers for ${req.params.name1} and ${req.params.name2}`);
    const multiplePlayers = await GetMultiplePlayers(req.params.name1, req.params.name2);
    res.json(multiplePlayers);
  },
  async getAvgFPTS(req, res) {
    console.log(`Controller: Inside getAvgFPTS for ${req.params.name}`);
    const avgFPTS = await GetAvgFPTS(req.params.name);
    res.json(avgFPTS);
  },
  async getPositionRank(req, res) {
    console.log(`Controller: Inside getPositionRank for ${req.params.name}`);
    const rank = await GetPosRank(req.params.name);
    res.json(rank);
  },
  async getBestPlayer(req, res) {
    console.log(`Controller: Inside getBestPlayer for week ${req.params.weekNumber} and position ${req.params.position}`);
    const bestPlayer = await GetBestPlayer(req.params.weekNumber, req.params.position);
    res.json(bestPlayer);
  },
  async getSchedule(req, res) {
    console.log(`Controller: Inside getSchedule for team ${req.params.team}`);
    const schedule = await Schedule(req.params.team);
    res.json(schedule);
  },
  async getCurrentWkOpp(req, res) {
    console.log(`Controller: Inside getCurrentWkOpp for ${req.params.name}`);
    const opp = await GetCurrentWkOpp(req.params.name);
    res.json(opp);
  },
  async comparePlayers(req, res) {
    console.log(
      `Controller: Inside comparePlayers for ${req.body.name1} and ${req.body.name2}`
    );
    const { name1, name2 } = req.body;
  
    try {
      const bothPlayersData = await GetMultiplePlayers(name1, name2);
  
      // Assuming bothPlayersData is an array with two elements
      const [playerData1, playerData2] = bothPlayersData;
  
      const decision = GetBestPlayer(playerData1, playerData2);
      res.json(decision);
    } catch (error) {
      console.error("Error in comparePlayers: ", error);
      res.status(500).json({ error: "An error occurred while comparing players" });
    }
  },
  
};

module.exports = fantasyController;
