import React from 'react';
import { ThemeProvider } from 'styled-components';
import themeVariables from 'styles/variables.scss';

const withTheme = Component => () => (
  <ThemeProvider theme={themeVariables}>
    <Component />
  </ThemeProvider>
);

export default withTheme;
