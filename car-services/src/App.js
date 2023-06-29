import React from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './core/globalStyles/GlobalStyles';
import Header from './core/features/header/Header';
import { theme } from './core/globalStyles/Theme';
import Button from './core/components/button/Button';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Header />
      <Button backgroundColor={theme.colors.black} text={'Book a service'} />
    </ThemeProvider>
  );
}

export default App;
