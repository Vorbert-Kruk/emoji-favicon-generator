import React, { memo } from 'react';
import PropTypes from 'prop-types';
import Emoji from 'a11y-react-emoji';
import styled from 'styled-components';

import { getFaviconEmoji } from 'utils/utils';

const StyledWrapper = styled.div`
  margin-top: 0.75rem;
  font-family: 'Roboto Mono';
  border-radius: 0.5rem;
  padding: 0.75rem;
  background-color: ${({ theme }) => theme.secondary};
  color: ${({ theme }) => theme.accent};
  max-width: calc((100vw - ${({ theme }) => theme.maxContentWidth}) * 0.5 + 1.25rem);
`;

const propTypes = {
  emote: PropTypes.string.isRequired
};

const defaultProps = {};

// TODO Vorbert -> dodać renderowanie <Emoji symbol={?} /> do funkcji getFaviconEmoji();

const CodeLabel = ({ emote }) => {
  return <StyledWrapper>{getFaviconEmoji(emote)}</StyledWrapper>;
};

CodeLabel.propTypes = propTypes;
CodeLabel.defaultProps = defaultProps;

export default memo(CodeLabel);
