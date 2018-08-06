module.exports = (app) => {
    const notes = require('../controllers/note.controller.js');
    // Retrieve a single Note with noteId
    app.get('/notes/:noteId/:Dates', notes.getTweet);
    // // Update a Note with noteId
    // app.put('/notes/:noteId', notes.update);
}