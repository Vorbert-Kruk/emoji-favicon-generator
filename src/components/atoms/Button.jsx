import styled from 'styled-components';

const Button = styled.button`
  border: none;
  padding: 0.35rem 0.75rem;
  font-size: 1.15rem;
  color: ${({ theme }) => theme.secondary};
  background-color: ${({ theme }) => theme.secondaryOpaque};
  border-radius: 0.35rem;

  &:hover {
    cursor: pointer;
  }

  &:not(:last-of-type) {
    margin-right: 1.25rem;
  }
`;

export default Button;
