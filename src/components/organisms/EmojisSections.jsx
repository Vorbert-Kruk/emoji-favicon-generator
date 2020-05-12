import React, { memo } from 'react';
import emojiCategories from 'utils/emojiCategories';
import styled from 'styled-components';

import EmojiSection from 'components/molecules/EmojiSection';

const StyledWrapper = styled.div`
  max-width: ${({ theme }) => theme.maxContentWidth};
  margin: 0 auto;
  padding-bottom: 2.25rem;

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
