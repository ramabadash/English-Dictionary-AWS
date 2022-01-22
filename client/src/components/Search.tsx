import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
// Context
import ApiContext from '../contexts/ApiContext';
// Style
import '../styles/Search.css';

/***** PROP TYPE *****/
interface SearchProp {
  type: string;
}

/*---------- COMPONENT ----------*/
function Search({ type }: SearchProp) {
  /***** CONTEXT *****/
  const { getWord, getRandWordByPart } = useContext(ApiContext);

  /***** STATE *****/
  // For word searching
  const [searchWord, setSearchWord] = useState('');
  const [partOfSpeech, setPartOfSpeech] = useState<string | undefined>();

  // For random word by part
  const [letter, setLetter] = useState<string | undefined>();

  /***** FUNCTIONS *****/
  // Navigation
  const navigate = useNavigate();

  // Search by the type of search in props
  const handleSearchClick = () => {
    // If the user search for words
    if (type === 'words') {
      // Api request
      getWord!(searchWord, partOfSpeech);

      // Navigate to the right route
      const whereToNavigate = partOfSpeech
        ? `/${searchWord}/${partOfSpeech}`
        : `/${searchWord}`;
      navigate(whereToNavigate);
    } else {
      // If the user search for parts
      const part = partOfSpeech || 'verbs';
      getRandWordByPart!(part, letter);

      // Navigate to the right route
      const whereToNavigate = letter
        ? `/part-of-speech/${part}?letter=${letter}`
        : `/part-of-speech/${part}`;
      navigate(whereToNavigate);
    }

    // Clean search history
    setSearchWord('');
    setPartOfSpeech(undefined);
    setLetter(undefined);
  };

  return (
    <div>
      <div className='search'>
        <button onClick={handleSearchClick}>
          <i className='fa fa-search' style={{ fontSize: '18px' }}></i>
        </button>
        {/* If the search render from the Word component - add search input */}
        {type === 'words' ? (
          <input
            type='text'
            placeholder=' Search a word'
            name='search'
            onChange={e => setSearchWord(e.target.value)}
          />
        ) : (
          <input
            type='text'
            placeholder=' Type a letter'
            name='search'
            onChange={e => setLetter(e.target.value)}
          />
        )}
        <select onChange={e => setPartOfSpeech(e.target.value)}>
          {/* If the search render from the Word component - add all option*/}
          {type === 'words' ? <option value={undefined}>All</option> : ''}
          <option value='adjectives'>Adjectives</option>
          <option value='adverbs'>Adverbs</option>
          <option value='interjections'>Interjections</option>
          <option value='nouns'>Nouns</option>
          <option value='verbs'>Verbs</option>
          <option value='pronouns'>Pronouns</option>
          <option value='prepositions'>Prepositions</option>
          <option value='conjunctions'>Conjunctions</option>
        </select>
      </div>
    </div>
  );
}

export default Search;
