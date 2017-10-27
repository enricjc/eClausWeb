const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
const http = require('http');
const db = require('./server/config/database');
const API = "/api"

mongoose.connect(db.database);
const app = express();

// Routes for interacting with MongoDB
const users = require('./server/routes/userRoutes');
const auth = require('./server/routes/authRoutes');
const claus = require('./server/routes/clauRoutes');
const membres = require('./server/routes/membreRoutes');

//Passport
//app.use(passport.initialize());

// Parsers
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

// Angular DIST output folder
app.use(express.static(path.join(__dirname, 'dist')));

// API location
app.use(API + '/users', users);
app.use(API + '/auth', auth);
app.use(API + '/claus', claus);
app.use(API + '/membres', membres);

// Send all other requests to the Angular app
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
});

//Set Port
const port = process.env.PORT || '3000';
app.set('port', port);

const server = http.createServer(app);

server.listen(port, '0.0.0.0', () => console.log(`Running on localhost:${port}`));
