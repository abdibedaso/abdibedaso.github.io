// Node.js web server for this web site
const express = require('express');
const app = express();

const helmet = require("helmet"); //Third-party Middleware

const words = require('./words');

const debug = require('debug')('app:debug'); // Load debug module // $env:DEBUG="app:debug"
if (app.get('env') == 'development') { // Enable logging only in a development machine
    debug('development env...'); // $env:DEBUG="app:debug"
}

app.set('view engine', 'pug');
app.set('views', './views');

app.use(express.json()); //Built in middleware enabling parsing of JSON in  express
app.use(express.static('views')); // Middleware function pointing to all static assets

app.use(helmet()); // Third-party Middleware // Helmet	Helps secure your apps by setting various HTTP headers.

app.use('/api/words', words);
app.get('/', (req, res) => {
    // res.set('Content-Type', 'text/html');
    res.sendFile('./views/dict.html', { root: __dirname });
});

const port = process.env.PORT || 3000; // PORT - Environment variable
app.listen(port, () => console.log(`Listening on port ${port}...`));