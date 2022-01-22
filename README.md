# English-Dictionary-AWS

## Assignment

Your about to build an english dictionary app

1. Download [English Dictionary in CSV format](https://www.bragitoff.com/2016/03/english-dictionary-in-csv-format/)
2. [x] Set up a DynamoDB with `dictionary` table
3. [x] **DATABASE:**
   1. [x] Parse & Insert all words, in a common structure, to `dictionary` table
4. [x] **BACKEND:**
   1. build a REST API with the following end point(s):
      1. [x] `GET /:word` - if word has more than one parts of speech will return all words part of speech, else, will return a word + definition + part of speech.
      2. [x] `GET /:word/:partOfSpeech` - will return a word + definition + part of speech [(noun, verb, adjectives, etc...)](https://www.dictionary.com/e/parts-of-speech/)
      3. [x] `GET /part-of-speech/:part` - for example, `/part-of-speech/adjective`, will return a random word + definition + part of speech (`part` is enum)
      4. [x] `GET /part-of-speech/:part?letter=X` - for example, `/part-of-speech/noun?letter=m`, will return a random word with the same letter + definition + part of speech
   2. [x] **BONUS**: should be deployed as `lambda function`
5. [x] **FRONTEND:**
   1. [x] build a `create-react-app` english dictionary app (mobile first)
   2. [x] URL routes:
      1. [x] `/:word` - dynamic route - `word` is dynamic URL parameter, used to request backend api
      1. [x] `/:word/:partOfSpeech` - dynamic route - `word` is dynamic URL parameter, used to request backend api
      1. [x] `/part-of-speech/:part` - `part` is enum URL parameter, used to request backend api
   3. [x] each word in dictionary is clickable and will redirect to a common URL
   4. **BONUS** should be deployed to `S3 bucket`
6. You should provide:
   1. frontend github repo, in readme:
      1. s3 url(s) + screenshots for each scenario
   2. backend github repo. in readme:
      1. lambda function url(s) + description for each scenario

![alt text](./dictionary_app_mockup.png 'Dictionary App Mockup')
