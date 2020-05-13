import React, { lazy, Suspense } from 'react';

import withTheme from 'theme/withTheme';
import HomePage from 'views/HomePage';

const Modal = lazy(() => import('components/organisms/modal/Modal'));

function App() {
  return (
    <div className="App">
      <HomePage />
      <Suspense fallback={<div />}>
        <Modal />
      </Suspense>
    </div>
  );
}

export default withTheme(App);
