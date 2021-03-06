import styled from 'styled-components';

const TemplateButton = styled.button`
  font-size: 1.15rem;
  border-radius: 0.3em;
  padding: 0.35rem 0.75rem;
  border-radius: 0.3em;
  line-height: 1.2;
  color: ${({ theme }) => theme.secondary};
  background-color: ${({ theme }) => theme.secondaryOpaque};
  transition: all 150ms ease;

  &:hover,
  &:focus {
    transform: translateY(-0.2em);
    background-color: ${({ theme }) => theme.secondary};
    color: ${({ theme }) => theme.accent};
  }

  &:active {
    transform: translateY(0);
  }
`;

export default TemplateButton;
