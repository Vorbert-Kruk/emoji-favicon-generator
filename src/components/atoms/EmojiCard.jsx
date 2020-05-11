import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Emoji from 'a11y-react-emoji';

const StyledWrapper = styled.div``;

const propTypes = {
  emote: PropTypes.string.isRequired
};

const defaultProps = {};

const EmojiCard = ({ emote }) => {
  return (
    <StyledWrapper>
      <Emoji symbol={emote} />
    </StyledWrapper>
  );
};

EmojiCard.propTypes = propTypes;
EmojiCard.defaultProps = defaultProps;

export default EmojiCard;
