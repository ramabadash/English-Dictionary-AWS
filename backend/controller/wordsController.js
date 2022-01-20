const AWS = require('aws-sdk');
const dynamodb = new AWS.DynamoDB.DocumentClient();
const { TABLE_NAME } = require('../utils/constants');

// Find word from params
exports.findWord = async (req, res, next) => {
  const { word } = req.params;
  const params = {
    TableName: TABLE_NAME,
    KeyConditionExpression: `word = :word`,
    ExpressionAttributeValues: {
      ':word': word.toUpperCase(),
    },
  };
  try {
    const result = await dynamodb.query(params).promise();
    return res.status(200).json(result.Items);
  } catch (error) {
    console.log(error);
    return res.status(400).json('Could not find a word, try again');
  }
};
