const { DataTypes } = require('sequelize');
const sequelize = require('./index');

const Summary = sequelize.define('Summary', {
  idea_summary: {
    type: DataTypes.STRING,
  },
  posted_by: {
    type: DataTypes.INTEGER,
    references: {
      model: 'User', // Assuming 'User' is the name of your user model
      key: 'id',
    },
  },
});

module.exports = Summary;