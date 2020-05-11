import React, { memo } from 'react';

import Hero from 'components/organisms/Hero';
import EmojisSections from 'components/organisms/EmojisSections';

const propTypes = {};
const defaultProps = {};

const HomePage = props => {
  return (
    <>
      <Hero />
      <EmojisSections />
    </>
  );
};

HomePage.propTypes = propTypes;
HomePage.defaultProps = defaultProps;

export default memo(HomePage);
