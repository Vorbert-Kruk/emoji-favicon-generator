import React, { memo, useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import cx from 'classnames';

import { scrollTo, isElementVisibleOnScreen } from 'utils/utils';

const StyledWrapper = styled.button`
  position: fixed;
  right: 1.25rem;
  bottom: 1.25rem;
  width: 2em;
  height: 2em;
  background-color: ${({ theme }) => theme.secondary};
  border-radius: 50%;
  font-size: 2rem;
  opacity: 0;
  transform: translateY(calc(100% + 1.25rem));
  transition: all 350ms ease;

  &.visible {
    transform: translateY(0);
    opacity: 1;
    box-shadow: 0 0 0.4em 0.0625em rgba(23, 23, 23, 0.15);
  }

  &:hover {
    transform: translate(0, -0.5em);

    span {
      transform: translateY(-0.25em);
    }
  }
`;

const StyledIcon = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  transition: all 350ms ease;

  &::before,
  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 0.35rem;
    height: 0.75em;
    background-color: ${({ theme }) => theme.accent};
    border-radius: 0.45rem;
  }

  &::before {
    transform: translateX(calc(-50% - 0.22em)) translateY(-50%) rotate(45deg);
  }

  &::after {
    transform: translateX(calc(-50% + 0.22em)) translateY(-50%) rotate(-45deg);
  }
`;

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const heroSectionRef = useRef(undefined);
  const buttonClassName = cx({ visible: isVisible });

  const watchForVisibilityToggle = () => {
    const isHeroSectionVisible = isElementVisibleOnScreen(heroSectionRef.current);
    setIsVisible(!isHeroSectionVisible);
  };

  useEffect(() => {
    heroSectionRef.current = document.querySelector('.hero');

    watchForVisibilityToggle();
    window.addEventListener('scroll', watchForVisibilityToggle);
    return () => window.removeEventListener('scroll', watchForVisibilityToggle);
  }, []);

  const handleClick = () => scrollTo(document.body);

  return (
    <StyledWrapper onClick={handleClick} className={buttonClassName}>
      <StyledIcon />
    </StyledWrapper>
  );
};

export default memo(ScrollToTopButton);
