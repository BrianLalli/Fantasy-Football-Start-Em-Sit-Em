const router = require('express').Router();
const fantasyController = require('../controllers/fantasyControllers');

router.get('/player/:name', fantasyController.getPlayerData);
router.get('/multiple-players/:name1/:name2', fantasyController.getMultiplePlayers);
router.get('/avg-fpts/:name', fantasyController.getAvgFPTS);
router.get('/position-rank/:name', fantasyController.getPositionRank);
router.get('/best-player/:weekNumber/:position', fantasyController.getBestPlayer); // Updated this line
router.get('/schedule/:team', fantasyController.getSchedule);
router.get('/current-week-opponent/:name', fantasyController.getCurrentWkOpp);

module.exports = router;
