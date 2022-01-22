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
  const { getWord } = useContext(ApiContext);

  /***** STATE *****/
  const [searchWord, setSearchWord] = useState('');
  const [partOfSpeech, setPartOfSpeech] = useState<string | undefined>();

  /***** FUNCTIONS *****/
  // Navigation
  const navigate = useNavigate();

  return (
    <div>
      <div className='search'>
        <button
          onClick={() => {
            // Api request
            getWord!(searchWord, partOfSpeech);

            // Navigate to the right route
            const whereToNavigate = partOfSpeech
              ? `/${searchWord}/${partOfSpeech}`
              : `/${searchWord}`;
            navigate(whereToNavigate);

            // Clean search history
            setSearchWord('');
            setPartOfSpeech('');
          }}
        >
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
          ''
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
