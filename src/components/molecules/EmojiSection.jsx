import React, { memo } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import EmojiCard from 'components/atoms/EmojiCard';

const StyledWrapper = styled.section``;

const StyledSectionHeader = styled.h2`
  color: ${({ theme }) => theme.accent};
`;

const propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  emojis: PropTypes.objectOf(PropTypes.object).isRequired
};

const defaultProps = {};

const EmojiSection = ({ id, name, emojis }) => {
  return (
    <StyledWrapper id={id}>
      <StyledSectionHeader>{name}</StyledSectionHeader>
      {Object.values(emojis).map(emoji => (
        <EmojiCard emoji={emoji} />
      ))}
    </StyledWrapper>
  );
};

EmojiSection.propTypes = propTypes;
EmojiSection.defaultProps = defaultProps;

export default memo(EmojiSection);
