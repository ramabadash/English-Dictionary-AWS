import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
//Types
import { WordObj } from '../@types/types';
// Style
import '../styles/Word.css';
import Search from './Search';

/*---------- COMPONENT ----------*/
function Word() {
  /***** STATES *****/
  const [paramWord, setParamWord] = useState(useParams().word);
  const [words, setWords] = useState<WordObj[]>([]);
  const [loading, setLoading] = useState(false);

  /***** EFFECT *****/
  // Get word definition on first render
  useEffect(() => {
    if (paramWord) {
      getWord(paramWord, undefined);
    }
  }, [paramWord]);

  /***** FUNCTIONS *****/
  // Navigation
  const navigate = useNavigate();

  // Get word from dictionary by the word
  const getWord = async (word: string, partOfSpeech: string | undefined) => {
    setLoading(true); // Start loader
    try {
      const requestUrl = partOfSpeech
        ? `http://localhost:3000/${word}/${partOfSpeech}`
        : `http://localhost:3000/${word}`;

      const { data } = await axios.get(requestUrl);
      setWords(data); // Set result

      // Stop loader
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    } catch (error) {
      console.log(error); // TODO ERROR HANDLING
    }
  };

  return (
    <div>
      {loading ? (
        <span className='loader'></span>
      ) : (
        <div className='word-container-div'>
          <Search onSearch={getWord} type='words' />
          <br />
          {words.map(({ word, pos, definitions }) => (
            <div key={`${word}_${pos}`}>
              <h2>{word}</h2>
              <p>{pos}</p>
              <div>
                {definitions.map((definition, i) => (
                  <div key={i}>
                    <p>
                      {definition.split(' ').map((word, i) => (
                        <span
                          onClick={() => {
                            const cleanWord = word.replace(/[^a-zA-Z ]/g, '');
                            getWord(cleanWord, undefined);
                            navigate(`/${cleanWord}`);
                          }}
                          key={i}
                        >
                          {word}
                          {'  '}
                        </span>
                      ))}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Word;
