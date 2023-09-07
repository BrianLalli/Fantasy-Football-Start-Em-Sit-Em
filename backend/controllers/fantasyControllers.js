const GetPlayerData = require("../utils/GetPlayerData");
const GetMultiplePlayers = require("../utils/GetMultiplePlayers");
const GetPlayerTeam = require("../utils/GetPlayerTeam");
const GetPlayerPosition = require("../utils/GetPlayerPosition");
const GetAvgFPTS = require("../utils/GetAvgFPTS");
const GetPosRank = require("../utils/GetPosRank");
const Schedule = require("../utils/Schedule");
const GetBestPlayer = require("../utils/GetBestPlayer");

const fantasyController = {
  async getPlayerData(req, res) {
    // Renamed to match fantasyRoutes.js
    const playerData = await GetPlayerData(req.params.name); // Changed the parameter name to match the route
    res.json(playerData);
  },
  async getMultiplePlayers(req, res) {
    // Renamed to match fantasyRoutes.js
    const multiplePlayers = await GetMultiplePlayers(
      req.params.name1,
      req.params.name2
    ); // Changed the parameter names to match the route
    res.json(multiplePlayers);
  },
  async getAvgFPTS(req, res) {
    // Already matches
    const avgFPTS = await GetAvgFPTS(req.params.name); // Changed the parameter name to match the route
    res.json(avgFPTS);
  },
  async getPositionRank(req, res) {
    // Renamed to match fantasyRoutes.js
    const rank = await GetPosRank(req.params.name); // Changed the parameter name to match the route
    res.json(rank);
  },
  async getBestPlayer(req, res) {
    console.log("Inside getBestPlayer"); // add this line
    const bestPlayer = await GetBestPlayer(
      req.params.weekNumber,
      req.params.position
    );
    res.json(bestPlayer);
  },
  async getSchedule(req, res) {
    // Added this to match fantasyRoutes.js
    const schedule = await Schedule(req.params.team); // Changed the parameter name to match the route
    res.json(schedule);
  },
  async getCurrentWkOpp(req, res) {
    // Renamed to match fantasyRoutes.js
    const opp = await GetCurrentWkOpp(req.params.name); // Changed the parameter name to match the route
    res.json(opp);
  },
};

module.exports = fantasyController;
