import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
// Context
import ApiContext from '../contexts/ApiContext';
// Style
import '../styles/WordNotFound.css';

/*---------- COMPONENT ----------*/
function WordNotFound() {
  /***** CONTEXT *****/
  const { getWord } = useContext(ApiContext);

  /***** FUNCTIONS  *****/
  const navigate = useNavigate();

  return (
    <div className='not-found-container'>
      <h2>Awww... Don't cry.</h2>
      <h3>
        We were unable to find the word you were looking for. Please try again.
      </h3>
      <img
        className='not-found-img'
        alt='cry-img'
        src='https://i.pinimg.com/originals/73/1b/ca/731bca966bb1bb956c7bab002bc0e6de.png'
      />
      <button
        onClick={() => {
          getWord!('example', undefined);
          navigate('/example');
        }}
      >
        Back to word searching
      </button>
    </div>
  );
}

export default WordNotFound;
