import React, { memo } from 'react';
import emojiCategories from 'utils/emojiCategories';
import styled from 'styled-components';

import EmojiSection from 'components/molecules/EmojiSection';

const StyledWrapper = styled.div``;

const EmojisSections = () => {
  return (
    <StyledWrapper>
      {Object.values(emojiCategories).map(emojiCategory => (
        <EmojiSection
          emoji={emojiCategory.emojis}
          sectionName={emojiCategory.name}
          key={emojiCategory.id}
        />
      ))}
    </StyledWrapper>
  );
};

export default memo(EmojisSections);
