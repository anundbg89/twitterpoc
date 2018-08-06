const express = require('express');
const bodyParser = require('body-parser');
// create express app
const app = express();
require('./app/routes/note.routes.js')(app);
// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))
// parse requests of content-type - application/json
app.use(bodyParser.json())
//define a simple route
app.get('/', (req, res) => {
    res.json({"message": "welcome to easynotes application. take notes quickly. organize and keep track of all your notes."});

});

// listen for requests
app.listen(3000, () => {
    console.log("Server is listening on port 3000");

});