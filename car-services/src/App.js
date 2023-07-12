import React from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './core/globalStyles/GlobalStyles';
import Header from './core/features/header/Header';
import { theme } from './core/globalStyles/Theme';
import { HomePage } from './screens/HomePage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './core/features/footer/Footer';
import { Services } from './screens/Services';
import { ServiceSingle } from './screens/ServiceSingle';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/services' element={<Services />} />
          <Route path='/services/single' element={<ServiceSingle />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
