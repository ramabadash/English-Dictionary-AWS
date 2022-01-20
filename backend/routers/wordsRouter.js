const express = require('express');
const router = express.Router();
//FUNCTIONS
const { findWord, findWordFromPart } = require('../controller/wordsController');

// If word has more than one parts of speech
// will return all words part of speech, else,
// will return a word + definition + part of speech.
router.get('/:word', findWord);

// Will return a word + definition + part of speech
router.get('/:word/:partOfSpeech', findWordFromPart);

module.exports.wordsRouter = router;
