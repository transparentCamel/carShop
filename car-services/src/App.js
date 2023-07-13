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
import { About } from './screens/About';
import { Contact } from './screens/Contact';
import { Blog } from './screens/Blog';

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
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/blog' element={<Blog />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
