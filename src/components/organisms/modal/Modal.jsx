import React, { memo, useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import cx from 'classnames';
// TODO Vorbert -> zastanowić się nad eksportem do ModalCloseButton
import { useDispatch } from 'react-redux';

import { copyToClipboard, getFaviconEmoji, downloadEmojiAsSvg } from 'utils/utils';
import Button from 'components/atoms/Button';
import CodeLabel from 'components/atoms/CodeLabel';
import EmojiDisplayCard from 'components/atoms/EmojiDisplayCard';
import ModalCloseButton from 'components/atoms/ModalCloseButton';
import { hideModal } from 'components/organisms/modal/actions';

const StyledWrapper = styled.div`
  position: fixed;
  display: flex;
  bottom: 1.25rem;
  right: 1.25rem;
  padding: 0.75rem 0.95rem;
  background-color: ${({ theme }) => theme.accent};
  border-radius: 0.5rem;
  flex-direction: column;
  align-items: center;
  transition: all 350ms ease;
  transform: translateX(calc(100% + 1.25rem));
  min-width: calc((100vw - ${({ theme }) => theme.maxContentWidth}) * 0.5 - 2.5rem);

  &.visible {
    transform: translateX(0);
    box-shadow: 0 0 3.25rem 0 rgba(23, 23, 23, 0.35);
  }
`;

const StyledHeader = styled.h3`
  font-size: 2.25rem;
  text-align: center;
`;

const StyledButtonWrapper = styled.div`
  display: flex;
  margin-top: 0.75rem;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
`;

const Modal = () => {
  const [svgCode, setSvgCode] = useState('');
  const [codeWasCopied, setCodeWasCopied] = useState(false);
  const { visible, emoji } = useSelector(state => state.modalReducer);
  const styledWrapperClassName = cx({ visible });
  const dispatch = useDispatch();

  useEffect(() => {
    setSvgCode(getFaviconEmoji(emoji));
    setCodeWasCopied(false);
  }, [emoji]);

  useEffect(() => {
    !visible && setCodeWasCopied(false);
  }, [visible]);

  const handleHideModal = () => {
    dispatch(hideModal());
  };

  const handleDownloadClick = () => {
    downloadEmojiAsSvg(emoji);
  };

  const handleCopyToClipboardClick = () => {
    copyToClipboard(svgCode);
    setCodeWasCopied(!codeWasCopied);
  };

  return (
    <StyledWrapper className={styledWrapperClassName}>
      <ModalCloseButton onClick={handleHideModal} />
      <StyledHeader>Picked emoji:</StyledHeader>
      <EmojiDisplayCard emoji={emoji} offsetTop />
      <CodeLabel code={svgCode} />
      <StyledButtonWrapper>
        <Button onClick={handleDownloadClick} aria-label="Download the svg file">
          Download SVG
        </Button>
        <Button onClick={handleCopyToClipboardClick} aria-label="Copy the favicon code">
          {codeWasCopied ? 'Copied ✔' : 'Copy code'}
        </Button>
      </StyledButtonWrapper>
    </StyledWrapper>
  );
};

export default memo(Modal);
