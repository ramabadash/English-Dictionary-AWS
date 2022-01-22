const serverless = require('serverless-http');
const express = require('express');
const app = express();
// Routers
const { wordsRouter } = require('./routers/wordsRouter');
const { partOfSpeechRouter } = require('./routers/partOfSpeechRouter');

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.use('/part-of-speech', partOfSpeechRouter);
app.use('/', wordsRouter);

module.exports.handler = serverless(app);
