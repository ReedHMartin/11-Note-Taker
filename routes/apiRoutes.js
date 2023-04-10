// Require necessary NPM packages and files
const express = require('express');
const router = express.Router();
const db = require('../db/db.json');
const { v4: uuidv4 } = require('uuid');

// Set up GET route for retrieving notes
router.get('/notes', (req, res) => {
  res.json(db);
});

// Set up POST route for saving a new note
router.post('/notes', (req, res) => {
  const { title, text } = req.body;
  const newNote = { id: uuidv4(), title, text };
  db.push(newNote);
  res.json(newNote);
});

// Set up DELETE route for deleting a note
router.delete('/notes/:id', (req, res) => {
  const noteId = req.params.id;
  const noteIndex = db.findIndex(note => note.id === noteId);
  if (noteIndex >= 0) {
    db.splice(noteIndex, 1);
  }
  res.json(db);
});

// Export the `router` instance to make it available to other files
module.exports = router;