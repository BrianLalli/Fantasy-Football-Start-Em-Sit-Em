const { QBProjection, RBProjection, WRProjection, TEProjection, KProjection, DSTProjection } = require('./models');

async function getPlayerPosition(playerName) {
  const projectionModels = [QBProjection, RBProjection, WRProjection, TEProjection, KProjection, DSTProjection];
  const positions = ['QB', 'RB', 'WR', 'TE', 'K', 'DST'];

  for (let i = 0; i < projectionModels.length; i++) {
    const model = projectionModels[i];
    const position = positions[i];

    const projection = await model.findOne({
      where: {
        player: playerName
      }
    });

    if (projection) {
      return position;
    }
  }

  return null;
}

module.exports = getPlayerPosition;
