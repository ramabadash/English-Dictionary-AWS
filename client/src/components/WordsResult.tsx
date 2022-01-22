import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
// Context
import ApiContext from '../contexts/ApiContext';
// Types
import { WordObj } from '../@types/types';

/*---------- COMPONENT ----------*/

function WordsResult({ words }: { words: WordObj[] | undefined }) {
  /***** CONTEXT *****/
  const { getWord } = useContext(ApiContext);

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
      {words!.map(({ word, pos, definitions }) => (
        <div key={`${word}_${pos}`}>
          <h2>{word}</h2>
          <p>{pos}</p>
          <div>{renderDefinitionsArr(definitions)}</div>
        </div>
      ))}
    </div>
  );
}

export default WordsResult;
