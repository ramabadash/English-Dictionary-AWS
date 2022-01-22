const AWS = require('aws-sdk');
const dynamodb = new AWS.DynamoDB.DocumentClient();
const { TABLE_NAME, PART_OF_SPEECH_DICT } = require('../utils/constants');

// Get random word with part of speech
exports.getWordWithPart = async (req, res, next) => {
  const { letter } = req.query;
  const { part } = req.params;
  const params = {
    TableName: TABLE_NAME,
    FilterExpression: '#pos = :pos AND contains(#word, :word)',
    ExpressionAttributeValues: {
      ':pos': PART_OF_SPEECH_DICT[part],
      ':word': letter ? letter.toUpperCase() : '', // Contain a letter from the query params
    },
    ExpressionAttributeNames: {
      '#pos': 'pos',
      '#word': 'word',
    },
  };
  try {
    const result = await dynamodb.scan(params).promise();
    const randomIndex = Math.floor(Math.random() * result.Items.length);
    return res.status(200).json(result.Items[randomIndex]);
  } catch (error) {
    console.log(error);
    return res.status(400).json('Could not find a word, try again');
  }
};
