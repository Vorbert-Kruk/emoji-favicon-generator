import React, { memo } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Emoji from 'a11y-react-emoji';

const StyledButtonWrapper = styled.a`
  line-height: 100%;
  font-size: 1.75rem;
  color: ${({ theme }) => theme.secondary};
  background-color: ${({ theme }) => theme.secondaryOpaque};
  padding: 0.15em 0.5em;
  border-radius: 0.5rem;
  margin-right: 0.75rem;
  margin-top: 0.75rem;
  text-decoration: none;
  transition: all 150ms ease;

  span {
    margin-left: 0.35rem;
  }

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

const propTypes = {
  emote: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
};

const defaultProps = {};

const LinkButton = ({ children, emote, ...others }) => (
  <StyledButtonWrapper {...others}>
    {children}
    <Emoji symbol={emote} />
  </StyledButtonWrapper>
);

LinkButton.propTypes = propTypes;
LinkButton.defaultProps = defaultProps;

export default memo(LinkButton);
