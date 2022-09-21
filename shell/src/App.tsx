import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CharacterDetails } from 'character_details/CharacterDetails';
import { CharactersList } from 'characters_list/CharactersList';

import { globalStyles } from './styles/global';

function App() {
  globalStyles();

  return (
    <Router>
      <Routes>
        <Route path="/" element={<CharactersList />} />
        <Route path="/details" element={<CharacterDetails />} />
      </Routes>
    </Router>
  );
}
ReactDOM.render(<App />, document.getElementById('app'));
