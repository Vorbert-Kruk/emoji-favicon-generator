import styled from 'styled-components';

const HeroTitle = styled.h1`
  font-size: 3.5rem;
  margin-top: 0.35em;
  font-weight: bold;
  text-align: center;

  @media screen and (max-width: 800px) {
    margin-top: 0.75rem;
    font-size: 2.625rem;
    line-height: 1;
  }

  @media screen and (max-width: 450px) {
    font-size: 2.1rem;
  }
`;

export default HeroTitle;
