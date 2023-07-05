import { createGlobalStyle } from 'styled-components';
import { theme } from './Theme';

export const GlobalStyles = createGlobalStyle`
@font-face {
    font-family: 'Manrope';
    src: url('../../assets/fonts/Manrope-Regular.ttf');
    
  }

body {
    margin: 0;
    padding: 0;
    
    h1 {
        font-size: ${theme.fontSizes.h1};
    }
    h2 {
        font-size: ${theme.fontSizes.h2};
    }
    h3 {
        font-size: ${theme.fontSizes.h3};
    }
    .title01 {
        font-size: ${theme.fontSizes.title01}; 
    }
    .title02 {
        font-size: ${theme.fontSizes.title02}; 
    }
    .body01 {
        font-size: ${theme.fontSizes.paragraphOne}; 
    }
    .body02 {
        font-size: ${theme.fontSizes.paragraphTwo}; 
    }
   
}

`;
