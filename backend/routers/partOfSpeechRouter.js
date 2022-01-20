const express = require('express');
const router = express.Router();
//FUNCTIONS
const { getWordWithPart } = require('../controller/partOfSpeechController');

// Get part of speech and optional letter,
// Will return a random word with the part as pos that contains the letter
router.get('/:part', getWordWithPart);

module.exports.partOfSpeechRouter = router;
