import React, { useState } from 'react';
import axios from 'axios';
// Context
import ApiContext from './ApiContext';
//Types
import { WordObj } from '../@types/types';
/***** POP-UP MESSAGES *****/
import { Notyf } from 'notyf';
import 'notyf/notyf.min.css';
const notyf = new Notyf();

function ApiProvider({ children }: { children: JSX.Element[] | JSX.Element }) {
  /***** STATES *****/
  const [words, setWords] = useState<WordObj[]>([]); // Arr of word result
  const [loading, setLoading] = useState(false); // Is loading
  const BASE_URL = 'https://yt2wd1g8hj.execute-api.eu-west-1.amazonaws.com/dev';

  /***** FUNCTIONS - NETWORKING *****/

  // Get word from dictionary by the word
  const getWord = async (word: string, partOfSpeech: string | undefined) => {
    setLoading(true); // Start loader
    try {
      const requestUrl = partOfSpeech
        ? `${BASE_URL}/${word}/${partOfSpeech}`
        : `${BASE_URL}/${word}`;

      const { data } = await axios.get(requestUrl);
      setWords(data); // Set result

      // Stop loader
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    } catch (error) {
      console.log(error);
      notyf.error(`Can't get your word, sorry!`); //error message
    }
  };

  // Get random word by part of speech and (optional) by letter
  const getRandWordByPart = async (
    partOfSpeech: string,
    letter: string | undefined
  ) => {
    setLoading(true); // Start loader
    try {
      const requestUrl = letter
        ? `${BASE_URL}/part-of-speech/${partOfSpeech}?letter=${letter}`
        : `${BASE_URL}/part-of-speech/${partOfSpeech}`;

      const { data } = await axios.get(requestUrl);

      setWords([data]); // Set result

      // Stop loader
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    } catch (error) {
      console.log(error);
      notyf.error(`Can't get your word, sorry!`); //error message
    }
  };

  return (
    <ApiContext.Provider value={{ getWord, getRandWordByPart, words, loading }}>
      {children}
    </ApiContext.Provider>
  );
}

export default ApiProvider;
