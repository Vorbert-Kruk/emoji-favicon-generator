import styled from 'styled-components';

import TemplateButton from 'styling-templates/TemplateButton';

const Button = styled(TemplateButton)`
  &:not(:last-of-type) {
    margin-right: 1.25rem;
  }
`;

export default Button;
