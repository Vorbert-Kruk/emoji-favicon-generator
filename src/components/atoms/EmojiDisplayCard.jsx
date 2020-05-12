import React from 'react';
import PropTypes from 'prop-types';
import Emoji from 'a11y-react-emoji';
import styled from 'styled-components';

const StyledWrapper = styled.div`
  display: inline-block;
  font-size: 4rem;
  padding: 0.35em 0.25em;
  background-color: ${({ theme }) => theme.lightColor};
  border-radius: 0.75rem;
  line-height: 1;

  &.offset_top {
    margin-top: 0.75rem;
  }
`;

const propTypes = {
  emoji: PropTypes.string
};

const defaultProps = {
  emoji: '😀'
};

const EmojiDisplayCard = ({ emoji }) => (
  <StyledWrapper>
    <Emoji symbol={emoji} />
  </StyledWrapper>
);

EmojiDisplayCard.propTypes = propTypes;
EmojiDisplayCard.defaultProps = defaultProps;

export default EmojiDisplayCard;
