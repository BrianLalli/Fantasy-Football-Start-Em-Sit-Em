const express = require('express');
const db = require('./backend/config/database'); // Update path to match your folder structure
const app = express();
const PORT = process.env.PORT || 3000;

// Test database connection
db.authenticate()
  .then(() => console.log('Database connected...'))
  .catch(err => console.log('Error: ' + err));

const fantasyRoutes = require('./backend/routes/fantasyRoutes'); // Update path as per your folder structure

app.use('/api/fantasy', fantasyRoutes); // Prefix all routes with '/api/fantasy'

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

