import { createGlobalStyle } from 'styled-components';
import { theme } from './Theme';

export const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Manrope&display=swap');

body {
    margin: 0;
    padding: 0;
    font-family: ${theme.fonts.main};
    
}

`;
