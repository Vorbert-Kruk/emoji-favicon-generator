import React, { memo } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import EmojiCard from 'components/atoms/EmojiCard';

const StyledWrapper = styled.section``;

const StyledSectionHeader = styled.h3``;

const propTypes = {
  sectionName: PropTypes.string.isRequired,
  emojis: PropTypes.objectOf(PropTypes.object).isRequired
};

const defaultProps = {};

const EmojiSection = ({ sectionName, emojis }) => {
  return (
    <StyledWrapper>
      <StyledSectionHeader>{sectionName}</StyledSectionHeader>
      {Object.values(emojis).map(emoji => (
        <EmojiCard emoji={emoji} />
      ))}
    </StyledWrapper>
  );
};

EmojiSection.propTypes = propTypes;
EmojiSection.defaultProps = defaultProps;

export default memo(EmojiSection);
