

const { notes } = require('./Develop/db/db.json');
const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();


// Middleware


//Serve up front end
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './Develop/public/index.html'))
});

// Get all notes Route

// app.get('/api/notes', (req, res) => {
//     res.json(notes);
// });

// GET a specific note route

// POST a note to the db.json file





app.listen(3001, () => {
    console.log('API server now on port 3001!')
});

