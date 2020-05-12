import React, { memo } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledWrapper = styled.div`
  margin-top: 0.75rem;
  font-family: 'Roboto Mono';
  border-radius: 0.5rem;
  padding: 0.75rem;
  background-color: ${({ theme }) => theme.secondary};
  color: ${({ theme }) => theme.accent};
  max-width: 380px;
  user-select: all;
  word-break: break-all;

  @media screen and (max-width: 450.4px) {
    max-width: calc(100vw - 4.4rem);
  }
`;

const propTypes = {
  code: PropTypes.string.isRequired
};

const defaultProps = {};

const CodeLabel = ({ code }) => {
  return <StyledWrapper>{code}</StyledWrapper>;
};

CodeLabel.propTypes = propTypes;
CodeLabel.defaultProps = defaultProps;

export default memo(CodeLabel);
