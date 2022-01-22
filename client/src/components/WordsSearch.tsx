import React, { useEffect, useState, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
// Components
import Search from './Search';
// Context
import ApiContext from '../contexts/ApiContext';
// Style
import '../styles/Word.css';

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

  /***** FUNCTIONS *****/
  // Navigation
  const navigate = useNavigate();

  // Render definitions array
  const renderDefinitionsArr = (definitions: string[]) =>
    definitions.map((definition, i) => (
      <div key={i}>
        <p>{splitDefinitionIntoSpans(definition)}</p>
      </div>
    ));

  // Split one definition into clickable spans
  const splitDefinitionIntoSpans = (definition: string) =>
    definition.split(' ').map((word, i) => (
      <span
        onClick={() => {
          const cleanWord = word.replace(/[^a-zA-Z ]/g, '');
          getWord!(cleanWord, undefined);
          navigate(`/${cleanWord}`);
        }}
        key={i}
      >
        {word}
        {'  '}
      </span>
    ));

  return (
    <div>
      {loading ? (
        <span className='loader'></span>
      ) : (
        <div className='word-container-div'>
          <Search type='words' />
          <br />
          {words!.map(({ word, pos, definitions }) => (
            <div key={`${word}_${pos}`}>
              <h2>{word}</h2>
              <p>{pos}</p>
              <div>{renderDefinitionsArr(definitions)}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default WordsSearch;
