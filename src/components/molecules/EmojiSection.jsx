import React, { memo } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import EmojiCard from 'components/atoms/EmojiCard';

const StyledWrapper = styled.section`
  margin-top: 1.25rem;
`;

const StyledSectionHeader = styled.h2`
  margin-bottom: 0.75rem;
  font-size: 2.5rem;
  color: ${({ theme }) => theme.accent};
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
      {Object.values(emojis).map(emoji => (
        <EmojiCard emoji={emoji} key={emoji} />
      ))}
    </StyledWrapper>
  );
};

EmojiSection.propTypes = propTypes;
EmojiSection.defaultProps = defaultProps;

export default memo(EmojiSection);
