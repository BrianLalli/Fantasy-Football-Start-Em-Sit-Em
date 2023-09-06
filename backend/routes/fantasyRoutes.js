const router = require('express').Router();
const fantasyController = require('../controllers/fantasyControllers'); // Update path as per your folder structure

router.get('/player/:name', fantasyController.getPlayerData);
router.get('/multiple-players/:name1/:name2', fantasyController.getMultiplePlayers);
router.get('/avg-fpts/:name', fantasyController.getAvgFPTS);
router.get('/position-rank/:name', fantasyController.getPositionRank);
router.get('/best-player/:name1/:name2', fantasyController.getBestPlayer);
router.get('/schedule/:team', fantasyController.getSchedule);
router.get('/current-week-opponent/:name', fantasyController.getCurrentWkOpp); // Added missing route

module.exports = router;

