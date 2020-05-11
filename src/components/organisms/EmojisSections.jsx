import React, { memo } from 'react';
import emojis from 'utils/emojis';
import styled from 'styled-components';

import EmojiSection from 'components/molecules/EmojiSection';

const StyledWrapper = styled.div``;

const EmojisSections = () => {
  return (
    <StyledWrapper>
      {Object.values(emojis).map(emojiCategory => (
        <EmojiSection
          emoji={emojiCategory.emojis}
          sectionName={emojiCategory.name}
          key={emojiCategory.name}
        />
      ))}
    </StyledWrapper>
  );
};

export default memo(EmojisSections);
