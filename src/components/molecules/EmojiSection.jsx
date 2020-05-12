import React, { memo } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import EmojiCard from 'components/atoms/EmojiCard';

const StyledWrapper = styled.section`
  margin-top: 1.25rem;
`;

const StyledSectionHeader = styled.h2`
  margin-bottom: 0.35rem;
  font-size: 2.5rem;
  color: ${({ theme }) => theme.accent};

  &::first-letter {
    text-transform: uppercase;
  }
`;

const StyledEmojiWrapper = styled.div`
  display: grid;
  margin-left: -0.75rem;
  grid-template-columns: repeat(auto-fit, minmax(75px, 1fr));
  justify-items: center;
  justify-content: stretch;
  align-items: center;
`;

const propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  emojis: PropTypes.objectOf(PropTypes.string).isRequired
};

const defaultProps = {};

const EmojiSection = ({ id, name, emojis }) => {
  return (
    <StyledWrapper id={id}>
      <StyledSectionHeader>{name}</StyledSectionHeader>
      <StyledEmojiWrapper>
        {Object.values(emojis).map(emoji => (
          <EmojiCard emoji={emoji} key={emoji} />
        ))}
      </StyledEmojiWrapper>
    </StyledWrapper>
  );
};

EmojiSection.propTypes = propTypes;
EmojiSection.defaultProps = defaultProps;

export default memo(EmojiSection);
