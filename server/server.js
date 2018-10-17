const express = require('express');
const morgan = require('morgan');

const app = express();

app.use(morgan('dev'));
app.use(express.static('dist'));
app.use(express.static('public'));

//example:
//http://www.omdbapi.com/?apikey=8730e0e&i=tt3896198
module.exports = app;
