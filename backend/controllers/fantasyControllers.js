const GetPlayerData = require('../utils/GetPlayerData');
const GetMultiplePlayers = require('../utils/GetMultiplePlayers');
const GetPlayerTeam = require('../utils/GetPlayerTeam');
const GetPlayerPosition = require('../utils/GetPlayerPosition');
const GetAvgFPTS = require('../utils/GetAvgFPTS');
const GetPosRank = require('../utils/GetPosRank');
const Schedule = require('../utils/Schedule');
const GetBestPlayer = require('../utils/GetBestPlayer');

const fantasyController = {
  async getSinglePlayerData(req, res) {
    const playerData = await GetPlayerData(req.params.playerName, req.params.weekNumber);
    res.json(playerData);
  },
  async getTwoPlayersData(req, res) {
    const multiplePlayers = await GetMultiplePlayers(req.params.playerName1, req.params.playerName2, req.params.weekNumber);
    res.json(multiplePlayers);
  },
  async getPlayerTeam(req, res) {
    const team = await GetPlayerTeam(req.params.playerName);
    res.json(team);
  },
  async getPlayerPosition(req, res) {
    const position = await GetPlayerPosition(req.params.playerName);
    res.json(position);
  },
  async getAvgFPTS(req, res) {
    const avgFPTS = await GetAvgFPTS(req.params.playerName, req.params.position);
    res.json(avgFPTS);
  },
  async getPosRank(req, res) {
    const rank = await GetPositionRank(req.params.playerName, req.params.position);
    res.json(rank);
  },
  async getCurrentWeekOpp(req, res) {
    const opp = await GetCurrentWkOpp(req.params.playerName);
    res.json(opp);
  },
  async getBestPlayer(req, res) {
    const bestPlayer = await GetBestPlayer(req.params.position, req.params.weekNumber);
    res.json(bestPlayer);
  }
};

module.exports = fantasyController;

