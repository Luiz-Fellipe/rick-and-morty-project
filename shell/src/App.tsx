import React from 'react';
import ReactDOM from 'react-dom';

// Components
import Home from './pages/Home';

// Styles
import { globalStyles } from './styles/global';

function App() {
  globalStyles();

  return <Home />;
}
ReactDOM.render(<App />, document.getElementById('app'));
