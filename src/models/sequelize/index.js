const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('neondomain_db_js', 'admin', 'admin', {
  host: 'localhost',
  dialect: 'mysql', // Or any other supported database
});

// Test the connection
(async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection to the database has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error); 
  }
})();

module.exports = sequelize;