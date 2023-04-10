// Import the required packages and files
const express = require('express');
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

// TODO: Set up the Express app
const app = express();
const PORT = process.env.PORT || 3000;

// TODO: Set up the middleware to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// TODO: Set up the static folder for serving CSS and JS files
app.use(express.static('public'));

// TODO: Set up the API routes
app.use('/api', apiRoutes);

// TODO: Set up the HTML routes
app.use('/', htmlRoutes);

// Start the server and listen on the specified port
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
