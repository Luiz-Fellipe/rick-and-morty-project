import React from 'react';
import ReactDOM from 'react-dom';

const Home = React.lazy(() => import('shell/App'));

function App() {
  return (
    <React.Suspense fallback={<div>Loading Shell...</div>}>
      <Home />
    </React.Suspense>
  );
}

ReactDOM.render(<App />, document.getElementById('app'));
