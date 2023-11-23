// Require necessary modules
const express = require('express');
const usersRouter = require('./routes/users');
const summariesRoutes = require('./routes/summariesRoutes');
// Create an Express app
const app = express();

app.use(express.json());

// Define routes and middleware
app.use('/summaries', summariesRoutes);
app.use('/users', usersRouter);
app.get('/', (req, res) => {
  res.send('There is nothing to see here, look for /users or /summaries');
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});