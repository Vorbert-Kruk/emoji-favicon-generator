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
  max-width: calc((100vw - ${({ theme }) => theme.maxContentWidth}) * 0.5 + 1.25rem);
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
