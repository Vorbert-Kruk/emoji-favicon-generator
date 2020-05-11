import React from 'react';

import withTheme from 'theme/withTheme';
import HomePage from 'views/HomePage';

function App() {
  return (
    <div className="App">
      <HomePage />
    </div>
  );
}

export default withTheme(App);
