import React, { memo } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Emoji from 'a11y-react-emoji';

import TemplateButton from 'styling-templates/TemplateButton';

const StyledButtonWrapper = styled(TemplateButton)`
  line-height: 100%;
  font-size: 1.75rem;
  margin-right: 0.75rem;
  margin-top: 0.75rem;
  text-decoration: none;

  span {
    margin-left: 0.35rem;
  }
`;

const propTypes = {
  emote: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
};

const defaultProps = {};

const LinkButton = ({ children, emote, ...others }) => (
  <StyledButtonWrapper {...others} as="a">
    {children}
    <Emoji symbol={emote} />
  </StyledButtonWrapper>
);

LinkButton.propTypes = propTypes;
LinkButton.defaultProps = defaultProps;

export default memo(LinkButton);
