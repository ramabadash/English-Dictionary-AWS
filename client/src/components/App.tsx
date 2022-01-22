import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// Component
import Welcome from './Welcome';
import Word from './Word';
import Navbar from './Navbar';

/*---------- COMPONENT ----------*/
function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Welcome />} />
          <Route path='/:word' element={<Word />} />
          <Route path='/:word/:partOfSpeech' element={<Word />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
