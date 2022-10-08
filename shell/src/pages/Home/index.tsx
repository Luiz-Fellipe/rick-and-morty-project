import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Components
import { CharacterDetails } from 'character_details/CharacterDetails';
import { CharactersList } from 'characters_list/CharactersList';
import { Header } from '@/components/header';

// Styles
import { Content } from './styles';

export default function Home() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        cacheTime: 60000 * 2, // 2min
        refetchOnWindowFocus: false,
      },
    },
  });

  return (
    <QueryClientProvider client={queryClient}>
      <Header />
      <Content>
        <Router>
          <Routes>
            <Route path="/" element={<CharactersList />} />
            <Route
              path="/details/:characterId"
              element={<CharacterDetails />}
            />
          </Routes>
        </Router>
      </Content>
    </QueryClientProvider>
  );
}
