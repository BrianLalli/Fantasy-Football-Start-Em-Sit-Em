const getPlayerData = require('./GetPlayerData');
const QBProjection = require('../models/QBProjections');
const RBProjection = require('../models/RBProjections');
const WRProjection = require('../models/WRProjections');
const TEProjection = require('../models/TEProjections');
const KProjection = require('../models/KProjections');
const DSTProjection = require('../models/DSTProjections');

const getMultiplePlayers = async (playerName1, playerName2, weekNumber, position) => {
  let Model;

  switch (position) {
    case 'QB':
      Model = QBProjection;
      break;
    case 'RB':
      Model = RBProjection;
      break;
    case 'WR':
      Model = WRProjection;
      break;
    case 'TE':
      Model = TEProjection;
      break;
    case 'K':
      Model = KProjection;
      break;
    case 'DST':
      Model = DSTProjection;
      break;
    default:
      return null;
  }

  try {
    const playerData1 = await Model.findOne({
      where: { player_name: playerName1 }
    });

    const playerData2 = await Model.findOne({
      where: { player_name: playerName2 }
    });

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
