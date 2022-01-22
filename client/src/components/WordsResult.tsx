import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
// Context
import ApiContext from '../contexts/ApiContext';
// Types
import { WordObj } from '../@types/types';
// Style
import '../styles/WordsResult.css';

/*---------- COMPONENT ----------*/

function WordsResult({ words }: { words: WordObj[] | undefined }) {
  /***** CONTEXT *****/
  const { getWord, getRandWordByPart } = useContext(ApiContext);

  /***** FUNCTIONS *****/
  // Navigation
  const navigate = useNavigate();

  // Render definitions array
  const renderDefinitionsArr = (definitions: string[]) =>
    definitions.map((definition, i) => (
      <div key={i}>
        <p className='definition-par'>
          <i className='fab fa-diaspora'></i>
          {'  '}
          {splitDefinitionIntoSpans(definition)}
        </p>
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

  // Convert to full word
  const convertPos = (pos: string) => {
    const partOfSpeechMap = [
      { 'adv.': 'adverbs' },
      { 'n.': 'nouns' },
      { 'v.': 'verbs' },
      { 'prep.': 'prepositions' },
      { 'conj.': 'conjunctions' },
      { 'interj.': 'interjections' },
      { 'pron.': 'pronouns' },
      { 'a.': 'adjectives' },
    ];

    let returnedPartOfSpeech = '';
    partOfSpeechMap.forEach((partOfSpeech, i) => {
      if (Object.keys(partOfSpeech)[0] === pos) {
        returnedPartOfSpeech = Object.values(partOfSpeech)[0];
      }
    });
    return returnedPartOfSpeech;
  };

  return (
    <div>
      {words!.map(({ word, pos, definitions }) => (
        <div className='result-div' key={`${word}_${pos}`}>
          <h2 className='word'>{word}</h2>
          <h3
            className='part-of-speech'
            onClick={() => {
              pos = convertPos(pos); // Convert to full word
              getRandWordByPart!(pos, undefined);
              navigate(`/part-of-speech/${pos}`);
            }}
          >
            <i className='fas fa-project-diagram'></i> {'  '}
            {convertPos(pos)}
          </h3>
          <div>{renderDefinitionsArr(definitions)}</div>
        </div>
      ))}
    </div>
  );
}

export default WordsResult;
