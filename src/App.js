import React from 'react';

import withTheme from 'theme/withTheme';
import HomePage from 'views/HomePage';
import EmojiPopup from 'components/organisms/EmojiPopup';

function App() {
  return (
    <div className="App">
      <HomePage />
      <EmojiPopup />
    </div>
  );
}

export default withTheme(App);
