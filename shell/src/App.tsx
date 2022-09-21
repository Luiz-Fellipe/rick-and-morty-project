import React from 'react';
import ReactDOM from 'react-dom';

import { globalStyles } from './styles/global';

import { Home } from './pages/Home';

function App() {
  globalStyles();

  return <Home />;
}
ReactDOM.render(<App />, document.getElementById('app'));
