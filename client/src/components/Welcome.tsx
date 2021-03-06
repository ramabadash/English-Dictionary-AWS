import React from 'react';
// Style
import '../styles/Welcome.css';

function Welcome() {
  return (
    <div className='welcome-div'>
      <h1>Welcome to your english dictionary!</h1>
      <img
        alt='book-pic'
        id='book-pic'
        src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Open_book_nae_02.svg/2560px-Open_book_nae_02.svg.png'
      />
      <ul className='welcome-list'>
        <li>You can search any words you like!</li>
        <li>
          You can have all the definitions of the word in the different parts of
          speech.
        </li>
        <li>
          You can get only the definition of the word in the specific parts of
          speech.
        </li>
        <li>
          Plus you can get a random word from the specific parts of speech you
          choose.
        </li>
        <li>Note! Every word is clickable!</li>
      </ul>
    </div>
  );
}

export default Welcome;
