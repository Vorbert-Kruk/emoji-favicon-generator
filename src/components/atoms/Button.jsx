import styled from 'styled-components';

const Button = styled.button`
  border: none;
  padding: 0.35rem 0.75rem;
  color: ${({ theme }) => theme.secondary};
  background-color: ${({ theme }) => theme.secondaryOpaque};
  border-radius: 0.35rem;

  &:hover {
    cursor: pointer;
  }
`;

export default Button;
