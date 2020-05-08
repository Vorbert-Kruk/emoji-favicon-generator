import styled from 'styled-components';

const HeroEmojiCard = styled.div`
  display: inline-block;
  font-size: 4rem;
  padding: 0.35em 0.25em;
  background-color: ${({ theme }) => theme.lightColor};
  border-radius: 0.75rem;
  line-height: 1;
`;

export default HeroEmojiCard;
