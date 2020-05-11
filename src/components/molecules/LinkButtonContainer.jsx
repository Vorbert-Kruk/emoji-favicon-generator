import React, { memo } from 'react';
import styled from 'styled-components';

import emojis from 'utils/emojis';
import LinkButton from 'components/atoms/LinkButton';

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: 0.75rem;
  justify-content: center;
`;

const LinkButtonContainer = () => {
  const formatCategoryName = categoryName =>
    categoryName
      .split(/(?=[A-Z])/)
      .join(' ')
      .toLowerCase();

  return (
    <StyledWrapper>
      {Object.keys(emojis)
        .map(emojiKey => {
          const currentEmojiCategory = emojis[emojiKey];
          return {
            categoryName: formatCategoryName(emojiKey),
            ...currentEmojiCategory
          };
        })
        .map(emojiCategory => (
          <LinkButton emote={emojiCategory.categoryEmoji} href="#">
            {emojiCategory.categoryName}
          </LinkButton>
        ))}
    </StyledWrapper>
  );
};

export default memo(LinkButtonContainer);
