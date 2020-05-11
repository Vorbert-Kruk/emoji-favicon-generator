import React, { memo } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import Emoji from 'a11y-react-emoji';
import cx from 'classnames';
// TODO Vorbert -> zastanowić się nad eksportem do ModalCloseButton
import { useDispatch } from 'react-redux';

import { copyToClipboard } from 'utils/utils';
import Button from 'components/atoms/Button';
import CodeLabel from 'components/atoms/CodeLabel';
import ModalCloseButton from 'components/atoms/ModalCloseButton';
import { hideModal } from 'components/organisms/modal/actions';

const StyledWrapper = styled.div`
  position: fixed;
  display: flex;
  bottom: 1.25rem;
  right: 1.25rem;
  padding: 1rem 1.25rem;
  background-color: ${({ theme }) => theme.accent};
  border-radius: 0.5rem;
  flex-direction: column;
  align-items: center;
  transition: all 350ms ease;
  transform: translateX(calc(100% + 1.25rem));
  min-width: calc((100vw - ${({ theme }) => theme.maxContentWidth}) * 0.5 - 2.5rem);

  &.visible {
    transform: translateX(0);
  }
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

const StyledButtonWrapper = styled.div`
  display: flex;
  margin-top: 0.75rem;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
`;

// TODO Vorbert -> dodać React suspense / lazy loading
const EmojiPopup = () => {
  const { visible, emoji } = useSelector(state => state.modalReducer);
  const styledWrapperClassName = cx({ visible });
  const dispatch = useDispatch();

  const handleHideModal = () => {
    dispatch(hideModal());
  };

  return (
    <StyledWrapper className={styledWrapperClassName}>
      <ModalCloseButton onClick={handleHideModal} />
      <StyledHeader>Picked emoji:</StyledHeader>
      <StyledEmojiWrapper>
        <Emoji symbol={emoji} />
      </StyledEmojiWrapper>
      <CodeLabel emote={emoji} />
      <StyledButtonWrapper>
        <Button>Download SVG</Button>
        {/* TODO Vorbert -> dodać kopiowanko */}
        <Button onClick={() => copyToClipboard('heh')}>Copy Code</Button>
      </StyledButtonWrapper>
    </StyledWrapper>
  );
};

export default memo(EmojiPopup);
