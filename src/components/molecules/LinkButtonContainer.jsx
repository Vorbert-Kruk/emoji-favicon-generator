import React, { memo } from 'react';
import styled from 'styled-components';

import LinkButton from 'components/atoms/LinkButton';

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: 0.75rem;
  justify-content: center;
`;

const LinkButtonContainer = () => (
  <StyledWrapper>
    <LinkButton emote="😀" href="#">
      Smileys
    </LinkButton>
    <LinkButton emote="👨" href="#">
      People
    </LinkButton>
    <LinkButton emote="🐶" href="#">
      Animals
    </LinkButton>
    <LinkButton emote="🍩" href="#">
      Food
    </LinkButton>
    <LinkButton emote="🎣" href="#">
      Activities
    </LinkButton>
    <LinkButton emote="🎥" href="#">
      Objects
    </LinkButton>
    <LinkButton emote="❤️" href="#">
      Symbols
    </LinkButton>
    <LinkButton emote="🚩" href="#">
      Flags
    </LinkButton>
  </StyledWrapper>
);

export default memo(LinkButtonContainer);
