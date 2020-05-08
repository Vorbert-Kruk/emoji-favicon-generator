import React, { memo } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Emoji from 'a11y-react-emoji';

const StyledButtonWrapper = styled.a`
  line-height: 100%;
  font-size: 1.75rem;
  color: ${({ theme }) => theme.secondary};
  background-color: ${({ theme }) => theme.secondaryOpaque};
  padding: 0.15em 0.35em;
`;

const propTypes = {
  emoji: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
};

const defaultProps = {};

const LinkButton = ({ children, emoji, ...others }) => (
  <StyledButtonWrapper {...others}>
    {children}
    <Emoji symbol={emoji} />
  </StyledButtonWrapper>
);

LinkButton.propTypes = propTypes;
LinkButton.defaultProps = defaultProps;

export default memo(LinkButton);
