import React, { useState } from 'react';
// Style
import '../styles/Search.css';

/***** PROP TYPE *****/
interface SearchProp {
  onSearch: (word: string) => void;
  type: string;
}

/*---------- COMPONENT ----------*/
function Search({ onSearch, type }: SearchProp) {
  /***** STATE *****/
  const [searchWord, setSearchWord] = useState('');
  const [partOfSpeech, setPartOfSpeech] = useState('');

  return (
    <div>
      <div className='search'>
        <button
          onClick={() => {
            onSearch(searchWord);
            setSearchWord('');
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
          {type === 'words' ? <option value='all'>All</option> : ''}
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
