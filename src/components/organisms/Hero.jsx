import React, { memo } from 'react';
import styled from 'styled-components';

import LinkButtonContainer from 'components/molecules/LinkButtonContainer';
import HeroTitle from 'components/atoms/HeroTitle';
import HeroDescription from 'components/atoms/HeroDescription';
import EmojiDisplayCard from 'components/atoms/EmojiDisplayCard';

const StyledWrapper = styled.div`
  background-color: ${({ theme }) => theme.accent};
  width: 100%;
`;

const StyledContentWrapper = styled.div`
  display: flex;
  margin: 0 auto;
  padding: 3rem 0;
  max-width: ${({ theme }) => theme.maxContentWidth};
  flex-direction: column;
  align-items: center;
`;

const propTypes = {};
const defaultProps = {};

const Hero = () => {
  return (
    <StyledWrapper>
      <StyledContentWrapper>
        <EmojiDisplayCard />
        <HeroTitle>Emoji favicon generator</HeroTitle>
        <HeroDescription>Pick an emoji and get the svg file or the svg code!</HeroDescription>
        <LinkButtonContainer />
      </StyledContentWrapper>
    </StyledWrapper>
  );
};

Hero.propTypes = propTypes;
Hero.defaultProps = defaultProps;

export default memo(Hero);
