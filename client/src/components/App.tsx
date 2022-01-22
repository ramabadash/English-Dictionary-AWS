import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// Component
import Welcome from './Welcome';
import WordsSearch from './WordsSearch';
import Navbar from './Navbar';

/*---------- COMPONENT ----------*/
function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Welcome />} />
          <Route path='/:word' element={<WordsSearch />} />
          <Route path='/:word/:partOfSpeech' element={<WordsSearch />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
