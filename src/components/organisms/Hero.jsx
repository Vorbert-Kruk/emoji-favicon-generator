import styled from 'styled-components';

const Hero = styled.button`
  background-color: #77f;
  color: ${({ theme }) => theme.accentOpaque};
  padding: 0.35em 0.5em;
`;

export default Hero;
