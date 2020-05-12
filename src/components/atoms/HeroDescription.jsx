import styled from 'styled-components';

const HeroDescription = styled.p`
  font-size: 1.75rem;
  margin-top: 0.25em;
  font-weight: 500;
  text-align: center;

  @media screen and (max-width: 800px) {
    margin-top: 0.5rem;
    font-size: 1.3125rem;
  }

  @media screen and (max-width: 450px) {
    font-size: 1.1375rem;
  }
`;

export default HeroDescription;
