const router = require('express').Router();
const fantasyController = require('../controllers/fantasyControllers');

router.get('/player/:name', (req, res, next) => {
  console.log(`Route hit: GET /player/${req.params.name}`);
  fantasyController.getPlayerData(req, res, next);
});

router.get('/multiple-players/:name1/:name2', (req, res, next) => {
  console.log(`Route hit: GET /multiple-players/${req.params.name1}/${req.params.name2}`);
  fantasyController.getMultiplePlayers(req, res, next);
});

router.get('/avg-fpts/:name', (req, res, next) => {
  console.log(`Route hit: GET /avg-fpts/${req.params.name}`);
  fantasyController.getAvgFPTS(req, res, next);
});

router.get('/position-rank/:name', (req, res, next) => {
  console.log(`Route hit: GET /position-rank/${req.params.name}`);
  fantasyController.getPositionRank(req, res, next);
});

router.get('/best-player/:weekNumber/:position', (req, res, next) => {
    console.log(`Route hit: GET /best-player/${req.params.weekNumber}/${req.params.position}`);
    fantasyController.getBestPlayer(req, res, next);
  });  

router.get('/schedule/:team', (req, res, next) => {
  console.log(`Route hit: GET /schedule/${req.params.team}`);
  fantasyController.getSchedule(req, res, next);
});

router.get('/current-week-opponent/:name', (req, res, next) => {
  console.log(`Route hit: GET /current-week-opponent/${req.params.name}`);
  fantasyController.getCurrentWkOpp(req, res, next);
});

router.post('/spin-compare-players', (req, res, next) => {
    console.log(`Route hit: POST /spin-compare-players`);
    fantasyController.comparePlayers(req, res, next);
  });  

module.exports = router;
