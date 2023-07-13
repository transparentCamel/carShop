import styled from 'styled-components';
import { theme } from '../../globalStyles/Theme';

export const BlogHeaderStyles = styled.section`
  display: flex;
  height: 624px;
  .blogHeaderLeft {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50%;
    .overlay {
      position: absolute;
      width: 100%;
      height: 100%;
      background-color: #1e1b1b;
      opacity: 0.8;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .formulaContainer {
      width: 100%;
      img {
        height: 100%;
      }
    }

    h1 {
      margin: 0;
      position: absolute;

      color: #fff;

      text-align: center;
    }
  }
  .blogHeaderRight {
    display: flex;
    flex-direction: column;
    background-color: #1e1b1b;
    padding: 128px 64px;
    z-index: 9999;
    #trending {
      color: ${theme.colors.primary};
      letter-spacing: 4px;
    }
    p:not(#trending),
    h4 {
      color: #ffff;
    }
    h4 {
      font-size: 40px;
      margin: 0px;
    }
    .blogButtonContainer {
      display: flex;
      gap: 32px;
      margin-top: 32px;
      button {
        width: 177px;
      }
    }
  }
`;
