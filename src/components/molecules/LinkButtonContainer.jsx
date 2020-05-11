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
  return (
    <StyledWrapper>
      {Object.values(emojis).map((emojiCategory, categoryIndex) => (
        <LinkButton
          emote={emojiCategory.titleEmoji}
          key={emojiCategory.name}
          href={`#${Object.getOwnPropertyNames(emojis)[categoryIndex]}`}
        >
          {emojiCategory.name}
        </LinkButton>
      ))}
    </StyledWrapper>
  );
};

export default memo(LinkButtonContainer);
