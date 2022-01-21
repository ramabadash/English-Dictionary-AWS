import React from 'react';
// Style
import '../styles/Navbar.css';

function Navbar() {
  return (
    <div id='navlist'>
      <a href='#'>Home</a>

      <div className='search'>
        <input type='text' placeholder=' Search a word' name='search' />
        <button>
          <i className='fa fa-search' style={{ fontSize: '18px' }}></i>
        </button>
      </div>
    </div>
  );
}

export default Navbar;
