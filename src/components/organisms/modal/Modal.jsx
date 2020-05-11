import React, { memo } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import Emoji from 'a11y-react-emoji';

const StyledWrapper = styled.div`
  position: fixed;
  display: flex;
  bottom: 1.25rem;
  right: 1.25rem;
  padding: 1rem 1.25rem;
  border-radius: 0.5rem;
  background-color: ${({ theme }) => theme.accent};
  flex-direction: column;
  align-items: center;
`;

const StyledHeader = styled.h3`
  font-size: 2.25rem;
  text-align: center;
`;

const StyledEmojiWrapper = styled.div`
  margin-top: 0.75rem;
  padding: 1rem 1.25rem;
  font-size: 4rem;
  background-color: ${({ theme }) => theme.secondary};
  border-radius: 0.75rem;
`;

const EmojiPopup = () => {
  const { visible, emoji } = useSelector(state => state.modalReducer);
  return (
    <StyledWrapper visible={visible}>
      <StyledHeader>Picked emoji:</StyledHeader>
      <StyledEmojiWrapper>
        <Emoji symbol={emoji} />
      </StyledEmojiWrapper>
    </StyledWrapper>
  );
};

export default memo(EmojiPopup);
