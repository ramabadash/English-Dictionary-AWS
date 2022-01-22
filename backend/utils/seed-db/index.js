require('dotenv').config();
const AWS = require('aws-sdk');

const dynamoDB = new AWS.DynamoDB.DocumentClient({
  region: 'eu-west-1',
  accessKeyId: process.env.ACCESS_KEY_ID,
  secretAccessKey: process.env.SECRET_ACCESS_KEY,
});

const data = require('./dictionary.json');

const insertToDb = async event => {
  try {
    for (const word of event) {
      const params = {
        TableName: 'dictionary',
        Item: word,
      };

      dynamoDB.put(params, (err, result) => {
        if (err) {
          console.log(err);
        } else {
          console.log(`Insert ${word.word}`);
        }
      });
    }
    return 'success';
  } catch (e) {
    console.log(e);
    return e;
  }
};

insertToDb(data);
