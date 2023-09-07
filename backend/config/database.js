const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('fantasy_football', 'postgres', 'ProRight50!', {
  host: 'localhost',
  port: 5432,
  dialect: 'postgres'
});


async function testConnection() {
  try {
    await sequelize.authenticate();
    console.log('Connection established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}

testConnection();

module.exports = sequelize;
