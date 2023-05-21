const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('mysql', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
});

async function testConnection() {
  try {
    await sequelize.authenticate();
    console.log('Database connection has been established successfully.');
    
    // Perform a simple query to test the connection
    const result = await sequelize.query('SELECT 1+1 AS result');
    console.log('Result of the query:', result[0][0].result);
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  } finally {
    // Close the connection
    await sequelize.close();
  }
}

testConnection();
