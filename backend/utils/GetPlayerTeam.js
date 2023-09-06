const { QBProjection, RBProjection, WRProjection, TEProjection, KProjection, DSTProjection } = require('./GetPlayerTeam');

async function getPlayerTeam(playerName) {
  const projectionModels = [QBProjection, RBProjection, WRProjection, TEProjection, KProjection, DSTProjection];

  for (const model of projectionModels) {
    const projection = await model.findOne({
      where: {
        player: playerName
      },
      attributes: ['team']
    });

    if (projection) {
      return projection.team;
    }
  }

  return null;
}

module.exports = getPlayerTeam;
