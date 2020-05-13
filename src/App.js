import React, { lazy, Suspense } from 'react';

import withTheme from 'theme/withTheme';
import HomePage from 'views/HomePage';

const Modal = lazy(() => import('components/organisms/modal/Modal'));
const ScrollToTopButton = lazy(() => import('components/atoms/ScrollToTopButton'));

function App() {
  return (
    <div className="App">
      <HomePage />
      <Suspense fallback={<div />}>
        <ScrollToTopButton />
        <Modal />
      </Suspense>
    </div>
  );
}

export default withTheme(App);
