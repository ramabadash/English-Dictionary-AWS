import React, { useState } from 'react';
import axios from 'axios';
// Context
import ApiContext from './ApiContext';
//Types
import { WordObj } from '../@types/types';

function ApiProvider({ children }: { children: JSX.Element[] | JSX.Element }) {
  /***** STATES *****/
  const [words, setWords] = useState<WordObj[]>([]); // Arr of word result
  const [loading, setLoading] = useState(false); // Is loading

  /***** FUNCTIONS *****/
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
    <ApiContext.Provider value={{ getWord, words, loading }}>
      {children}
    </ApiContext.Provider>
  );
}

export default ApiProvider;