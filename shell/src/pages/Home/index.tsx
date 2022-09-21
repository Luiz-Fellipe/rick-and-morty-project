import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Components
import { CharacterDetails } from 'character_details/CharacterDetails';
import { CharactersList } from 'characters_list/CharactersList';
import { Header } from 'src/components/header';

// Styles
import { Content } from './styles';

export function Home() {
  return (
    <>
      <Header />
      <Content>
        <Router>
          <Routes>
            <Route path="/" element={<CharactersList />} />
            <Route path="/details" element={<CharacterDetails />} />
          </Routes>
        </Router>
      </Content>
    </>
  );
}
