import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
// Components
import Search from './Search';
import WordsResult from './WordsResult';
// Context
import ApiContext from '../contexts/ApiContext';
// Style
import '../styles/WordsSearch.css';
import '../styles/Loader.css';

/*---------- COMPONENT ----------*/
function WordsSearch() {
  /***** CONTEXT *****/
  const { getWord, words, loading } = useContext(ApiContext);

  /***** STATES *****/
  const [paramWord, setParamWord] = useState(useParams().word);

  /***** EFFECT *****/
  // Get word definition on paramWord change
  useEffect(() => {
    if (paramWord) {
      getWord!(paramWord, undefined);
    }
  }, [paramWord]);

  return (
    <div>
      {loading ? (
        <span className='loader'></span>
      ) : (
        <div className='word-container-div'>
          <Search type='words' />
          <br />
          {<WordsResult words={words} />}
        </div>
      )}
    </div>
  );
}

export default WordsSearch;
