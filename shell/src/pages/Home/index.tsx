import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ApolloProvider } from '@apollo/client';

// Services
import { client } from 'src/services/api';

// Components
import { CharacterDetails } from 'character_details/CharacterDetails';
import { CharactersList } from 'characters_list/CharactersList';
import { Header } from 'src/components/header';

// Styles
import { Content } from './styles';

export default function Home() {
  return (
    <ApolloProvider client={client}>
      <Header />
      <Content>
        <Router>
          <Routes>
            <Route path="/" element={<CharactersList />} />
            <Route path="/details" element={<CharacterDetails />} />
          </Routes>
        </Router>
      </Content>
    </ApolloProvider>
  );
}
