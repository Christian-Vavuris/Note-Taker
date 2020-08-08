

const { notes } = require('./Develop/db/db.json');
const express = require('express');
const fs = require('fs');
const PORT = process.env.PORT || 3001;
const app = express();


//Middleware

function filterByQuery(query, notesArray) {
    let filteredResults = notesArray;
    if (query.title) {
      filteredResults = filteredResults.filter(title => notes.title === query.title);
    }
    if (query.text) {
      filteredResults = filteredResults.filter(text => notes.text === query.text);
    }
    return filteredResults;
  }


// Routes

// app.get('/api/notes', (req, res) => {
//     res.json(notes);
// });

app.get('/api/notes', (req, res) => {
    let results = notes; 
    if (req.query) {
        results = filterByQuery(req.query, results);
      }
      res.json(results);
});

// app.post('/api/notes', (req, res) => {

// })

app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
  });

