import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
//Types
import { WordObj } from '../@types/types';

/*---------- COMPONENT ----------*/
function Word() {
  /***** STATES *****/
  const { word } = useParams();
  const [paramWord, setParamWord] = useState(useParams().word);
  const [words, setWords] = useState<WordObj[]>([]);

  /***** EFFECT *****/
  // Get word definition on first render
  useEffect(() => {
    getWord();
  }, [paramWord]);

  /***** FUNCTIONS *****/
  // Navigation
  const navigate = useNavigate();

  // Get word from dictionary by the word
  const getWord = async () => {
    try {
      const { data } = await axios.get(`http://localhost:3000/${word}`);
      console.log(data);

      setWords(data);
    } catch (error) {
      console.log(error); // TODO ERROR HANDLING
    }
  };

  return (
    <div>
      {words.map(({ word, pos, definitions }) => (
        <div key={`${word}_${pos}`}>
          <h2>{word}</h2>
          <p>{pos}</p>
          <div>
            {definitions.map((definition, i) => (
              <div key={i}>
                <p>
                  {definition.split(' ').map((word, i) => (
                    <span onClick={() => navigate(`/${word}`)} key={i}>
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
  );
}

export default Word;
