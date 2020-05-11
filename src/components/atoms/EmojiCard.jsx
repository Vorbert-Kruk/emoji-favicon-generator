import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Emoji from 'a11y-react-emoji';

const StyledWrapper = styled.div``;

const propTypes = {
  emoji: PropTypes.string.isRequired
};

const defaultProps = {};

const EmojiCard = ({ emoji }) => {
  return (
    <StyledWrapper>
      <Emoji symbol={emoji} />
    </StyledWrapper>
  );
};

EmojiCard.propTypes = propTypes;
EmojiCard.defaultProps = defaultProps;

export default EmojiCard;
