import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Emoji from 'a11y-react-emoji';
import { useDispatch } from 'react-redux';

import { storeEmoji, showModal } from 'components/organisms/modal/actions';

const StyledWrapper = styled.div`
  padding: 1rem 0.75rem;
  width: 100%;
  border-radius: 0.5rem;
  line-height: 1;
  font-size: 2rem;
  transition: all 150ms ease;
  color: ${({ theme }) => theme.darkColor};
  text-align: center;

  &:hover {
    box-shadow: 0 19px 40px rgba(0, 0, 0, 0.35);
    transform: scale(1.25);
    cursor: pointer;
  }
`;

const propTypes = {
  emoji: PropTypes.string.isRequired
};

const defaultProps = {};

const EmojiCard = ({ emoji }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(storeEmoji(emoji));
    dispatch(showModal());
  };

  return (
    <StyledWrapper onClick={handleClick}>
      <Emoji symbol={emoji} />
    </StyledWrapper>
  );
};

EmojiCard.propTypes = propTypes;
EmojiCard.defaultProps = defaultProps;

export default EmojiCard;
