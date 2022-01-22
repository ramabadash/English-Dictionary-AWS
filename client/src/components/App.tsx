import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// Component
import Welcome from './Welcome';
import WordsSearch from './WordsSearch';
import Navbar from './Navbar';
import RandomByPart from './RandomByPart';
import ApiProvider from '../contexts/ApiProvider';

/*---------- COMPONENT ----------*/
function App() {
  return (
    <ApiProvider>
      <div>
        <Router>
          <Navbar />
          <Routes>
            <Route path='/' element={<Welcome />} />
            <Route path='/:word' element={<WordsSearch />} />
            <Route path='/:word/:partOfSpeech' element={<WordsSearch />} />
            <Route path='/part-of-speech/:part' element={<RandomByPart />} />
          </Routes>
        </Router>
      </div>
    </ApiProvider>
  );
}

export default App;
