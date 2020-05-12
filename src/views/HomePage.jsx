import React, { memo, lazy, Suspense } from 'react';

import Hero from 'components/organisms/Hero';

const EmojisSections = lazy(() => import('components/organisms/EmojisSections'));

const propTypes = {};
const defaultProps = {};

const HomePage = props => {
  return (
    <>
      <Hero />
      <Suspense fallback={<div />}>
        <EmojisSections />
      </Suspense>
    </>
  );
};

HomePage.propTypes = propTypes;
HomePage.defaultProps = defaultProps;

export default memo(HomePage);
