const express = require('express');
const cors = require('cors'); // Import the cors package
const db = require('./backend/config/database');
const app = express();
const BACKEND_PORT = process.env.BACKEND_PORT || 5423; // Use the correct port for your backend

// Test database connection
db.authenticate()
  .then(() => console.log('Database connected...'))
  .catch(err => console.log('Error: ' + err));

// Use cors middleware to allow cross-origin requests
app.use(cors()); // This allows requests from all origins. You can configure it for specific origins if needed.

const fantasyRoutes = require('./backend/routes/fantasyRoutes');
app.use('/api/fantasy', fantasyRoutes);

app.listen(BACKEND_PORT, () => {
  console.log(`Server is running on port ${BACKEND_PORT}`);
});
