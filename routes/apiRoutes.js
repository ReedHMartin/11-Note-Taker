// TODO: Require necessary NPM packages and files
const express = require('express');
const router = express.Router();
const db = require('../db/db.json');
const { v4: uuidv4 } = require('uuid');

// TODO: Set up GET route for retrieving notes
router.get('/notes', (req, res) => {
  // TODO: Read the `db.json` file and return all saved notes as JSON
});

// TODO: Set up POST route for saving a new note
router.post('/notes', (req, res) => {
  // TODO: Receive a new note to save on the request body, add it to the `db.json` file,
  // give each note a unique id using `uuid` npm package and return the new note to the client
});

// TODO: Set up DELETE route for deleting a note
router.delete('/notes/:id', (req, res) => {
  // TODO: Receive a query parameter containing the id of a note to delete.
  // Read all notes from the `db.json` file, remove the note with the given `id` property,
  // and then rewrite the notes to the `db.json` file
});

// TODO: Export the `router` instance to make it available to other files
module.exports = router;
