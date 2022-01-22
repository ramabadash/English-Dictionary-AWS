import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
// Style
import '../styles/Navbar.css';

function Navbar() {
  /***** REF *****/
  const mySideNav = useRef<HTMLDivElement | null>(null);

  /***** FUNCTIONS  *****/
  const navigate = useNavigate();
  //
  function openNav() {
    if (mySideNav.current) {
      mySideNav.current.style.width = '200px';
    }
  }
  //
  function closeNav() {
    if (mySideNav.current) {
      mySideNav.current.style.width = '0';
    }
  }

  return (
    <div id='navlist'>
      <div ref={mySideNav} className='sideNav'>
        <span className='closebtn' onClick={closeNav}>
          &times;
        </span>
        <span
          onClick={() => {
            navigate('/');
            closeNav();
          }}
        >
          Home
        </span>
        <span
          onClick={() => {
            navigate('/example');
            closeNav();
          }}
        >
          Search a word
        </span>
        <span>Get random word by part of speech</span>
      </div>

      <span className='nav-item'>
        <span style={{ fontSize: '15px', cursor: 'pointer' }} onClick={openNav}>
          &#9776;
        </span>
      </span>

      <div className='logo'>
        <label
          style={{
            fontSize: '15px',
            color: '#f2f2f2',
            marginRight: '5px',
          }}
        >
          English dictionary
        </label>
        <img
          className='logo-pic'
          alt='dict-pic'
          src='https://cdn2.iconfinder.com/data/icons/minimalism/512/dictionary.png'
        />
      </div>
    </div>
  );
}

export default Navbar;
