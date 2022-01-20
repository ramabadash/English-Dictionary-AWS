const express = require('express');
const router = express.Router();
//FUNCTIONS
const { findWord } = require('../controller/wordsController');

// If word has more than one parts of speech
// will return all words part of speech, else,
// will return a word + definition + part of speech.
router.get('/:word', findWord);

module.exports.wordsRouter = router;
