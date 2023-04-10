// Import the required packages and files
const express = require('express');
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

// Set up the Express app
const app = express();
const PORT = process.env.PORT || 3000;

// Set up the middleware to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set up the static folder for serving CSS and JS files
app.use(express.static('public'));

// Set up the API routes
app.use('/api', apiRoutes);

// Set up the HTML routes
app.use('/', htmlRoutes);

// Start the server and listen on the specified port
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
