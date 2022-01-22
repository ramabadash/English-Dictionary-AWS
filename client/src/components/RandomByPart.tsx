import React, { useContext, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
// Components
import Search from './Search';
import WordsResult from './WordsResult';
// Context
import ApiContext from '../contexts/ApiContext';
// Style
import '../styles/RandomByPart.css';

/*---------- COMPONENT ----------*/
function RandomByPart() {
  /***** CONTEXT *****/
  const { getRandWordByPart, words, loading } = useContext(ApiContext);

  /***** STATES *****/
  const [paramPart, setParamPart] = useState(useParams().part);
  const [letter, setLetter] = useState('');

  /***** EFFECT *****/
  // Get word definition on paramWord change
  useEffect(() => {
    if (paramPart) {
      getRandWordByPart!(paramPart, undefined);
    }
  }, [paramPart]);

  return (
    <div>
      {loading ? (
        <span className='loader'></span>
      ) : (
        <div className='random-container'>
          <Search type='random' />
          <br />
          {<WordsResult words={words} />}
        </div>
      )}
    </div>
  );
}

export default RandomByPart;
