// TODO: Require necessary NPM packages and files
const express = require('express');
const router = express.Router();
const path = require('path');

// TODO: Set up GET route for `notes` page
router.get('/notes', (req, res) => {
  // TODO: Return the `notes.html` file
});

// TODO: Set up GET route for all other pages
router.get('*', (req, res) => {
  // TODO: Return the `index.html` file
});

// TODO: Export the `router` instance to make it available to other files
module.exports = router;
