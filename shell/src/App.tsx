import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';

function App() {
  return (
    <div className="container">
      <div>Name: shell</div>
      <div>Framework: react</div>
      <div>Language: TypeScript</div>
      <div>CSS: Empty CSS</div>
    </div>
  );
}
ReactDOM.render(<App />, document.getElementById('app'));
