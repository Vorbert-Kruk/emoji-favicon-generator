import styled from 'styled-components';

const ModalCloseButton = styled.button`
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  width: 2rem;
  height: 2rem;
  border: none;
  border-radius: 0.5rem;
  background-color: transparent;
  transition: all 150ms ease;

  &:hover,
  &:active,
  &:focus {
    background-color: ${({ theme }) => theme.secondaryOpaque};
    transform: rotate(180deg) scale(1.1);
  }

  &:active {
    transform: scale(0.9);
  }

  &:hover {
    cursor: pointer;
  }

  &::before,
  &::after {
    content: '';
    position: absolute;
    width: 75%;
    height: 0.25rem;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) rotateZ(45deg);
    transform-origin: center;
    background-color: ${({ theme }) => theme.secondary};
    border-radius: 0.25rem;
  }

  &::after {
    transform: translate(-50%, -50%) rotateZ(-45deg);
  }
`;

export default ModalCloseButton;
