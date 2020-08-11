

const { notes } = require('./db/db.json');
const express = require('express');
const fs = require('fs');
const path = require('path');
const PORT = process.env.PORT || 8080;
const app = express();

app.use(express.static('public'));


// Middleware


//Serve up front end
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './public/index.html'))
});

app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, './public/notes.html'))
});

// Get all notes Route

// app.get('/api/notes', (req, res) => {
//     res.json(notes);
// });

// GET a specific note route

// POST a note to the db.json file





app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
  });

