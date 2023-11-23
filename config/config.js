require('dotenv').config(); // If you're using environment variables

module.exports = {
  development: {
    username: process.env.DB_USER || 'admin',
    password: process.env.DB_PASSWORD || 'admin',
    database: process.env.DB_NAME || 'neondomain_db_js',
    host: process.env.DB_HOST || 'localhost',
    dialect: 'mysql',
    jwtsecret: process.env.JWT_SECRET || 'thisisasecretkeythisisasecretkeythisisasecretkeythisisasecretkeythisisasecretkeythisisasecretkeythisisasecretkeythisisasecretkeythisisasecretkey'
  },
  test: {
    // Test environment configuration
    // ...
  },
  production: {
    // Production environment configuration
    // ...
  },
};
