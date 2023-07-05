import styled from 'styled-components';
import { theme } from '../../globalStyles/Theme';

export const LearnMoreArrowStyles = styled.div`
  display: flex;
  flex-direction: row;
  p {
    margin: 0px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    font-size: ${theme.fontSizes.paragraphOne};
    font-weight: 600;
  }
  div {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-left: 16px;
  }
`;
