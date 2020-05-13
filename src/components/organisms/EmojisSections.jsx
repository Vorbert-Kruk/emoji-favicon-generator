import React, { memo } from 'react';
import emojiCategories from 'utils/emojiCategories';
import styled, { keyframes } from 'styled-components';

import EmojiSection from 'components/molecules/EmojiSection';

const appearAnimation = keyframes`
  0% {
    transform: translateY(-1.5rem);
    opacity: 0;
  }

  100% {
    transform: translateY(0);
    opacity: 1;
  }
`;

const StyledWrapper = styled.div`
  max-width: ${({ theme }) => theme.maxContentWidth};
  margin: 0 auto;
  padding-bottom: 2.25rem;
  animation: ${appearAnimation} 750ms ease forwards;

  @media screen and (max-width: ${({ theme }) => theme.maxContentWidth}) {
    padding: 0 3%;
  }
`;

const EmojisSections = () => {
  return (
    <StyledWrapper>
      {emojiCategories.map(emojiCategory => (
        <EmojiSection
          emojis={emojiCategory.emojis}
          name={emojiCategory.name}
          key={emojiCategory.id}
          id={emojiCategory.id}
        />
      ))}
    </StyledWrapper>
  );
};

export default memo(EmojisSections);
