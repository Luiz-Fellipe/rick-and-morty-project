import React from 'react';

const ShellApp = React.lazy(() => import('shell/App'));

function App() {
  function LoadingShell() {
    return <div>Loading Shell...</div>;
  }

  return (
    <React.Suspense fallback={<LoadingShell />}>
      <ShellApp />
    </React.Suspense>
  );
}

export default App;
