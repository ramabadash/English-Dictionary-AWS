const express = require('express');
const router = express.Router();
//FUNCTIONS
const { getWordWithPart } = require('../controller/partOfSpeechController');

router.get('/:part', getWordWithPart);

module.exports.partOfSpeechRouter = router;
