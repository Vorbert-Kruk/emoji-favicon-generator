import React, { memo } from 'react';
import emojiCategories from 'utils/emojiCategories';
import styled from 'styled-components';

import EmojiSection from 'components/molecules/EmojiSection';

const StyledWrapper = styled.div``;

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
