import React, { memo } from 'react';
import styled from 'styled-components';

import emojiCategories from 'utils/emojiCategories';
import LinkButton from 'components/atoms/LinkButton';

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: 0.75rem;
  justify-content: center;

  @media screen and (max-width: 800px) {
    margin-top: 0.5rem;
  }

  @media screen and (max-width: 450px) {
    margin-top: 0;
  }
`;

const LinkButtonContainer = () => {
  return (
    <StyledWrapper>
      {Object.values(emojiCategories).map(emojiCategory => (
        <LinkButton
          aria-label={`Go to the ${emojiCategory.name} category`}
          emote={emojiCategory.titleEmoji}
          key={emojiCategory.id}
          href={`#${emojiCategory.id}`}
        >
          {emojiCategory.name}
        </LinkButton>
      ))}
    </StyledWrapper>
  );
};

export default memo(LinkButtonContainer);
