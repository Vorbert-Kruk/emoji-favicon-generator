import React from 'react';

import withTheme from 'theme/withTheme';
import Hero from 'components/organisms/Hero';

function App() {
  return (
    <div className="App">
      <Hero />
    </div>
  );
}

export default withTheme(App);
