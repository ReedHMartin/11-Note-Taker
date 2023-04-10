// Require necessary NPM packages and files
const express = require('express');
const router = express.Router();
const path = require('path');

// Set up GET route for `notes` page
router.get('/notes', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/notes.html'));
});

// Set up GET route for all other pages
router.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

// Export the `router` instance to make it available to other files
module.exports = router;
