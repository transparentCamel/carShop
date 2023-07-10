import styled from 'styled-components';
import { theme } from '../../globalStyles/Theme';

export const ProcessStyles = styled.section`
  padding: 128px 14% 128px 14%;
  display: flex;

  .processTextContainer {
    display: flex;
    flex-direction: column;
    width: 50%;

    h2 {
      width: 80%;
      margin: 0px;
    }
    p {
      margin: 32px 0px 32px 0px;
      width: 60%;
      line-height: 1.6;
      font-size: ${theme.fontSizes.paragraphTwo};
    }
    :nth-child(2) {
      display: flex;
      flex-direction: column;
    }
  }
`;
