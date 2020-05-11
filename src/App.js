import React from 'react';

import withTheme from 'theme/withTheme';
import HomePage from 'views/HomePage';
import Modal from 'components/organisms/modal/Modal';

function App() {
  return (
    <div className="App">
      <HomePage />
      <Modal />
    </div>
  );
}

export default withTheme(App);
