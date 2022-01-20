import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// Component
import Word from './Word';

/*---------- COMPONENT ----------*/
function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/:word' element={<Word />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
