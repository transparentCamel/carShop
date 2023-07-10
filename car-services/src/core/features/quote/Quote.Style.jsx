import styled from 'styled-components';
import { theme } from '../../globalStyles/Theme';

export const QuoteStyles = styled.section`
  padding: 128px 14% 128px 14%;
  display: flex;

  background-color: ${theme.colors.steelGrey};

  div {
    width: 50%;
    h2 {
      margin: 0px 0px 64px 0px;
      font-weight: 800;
      transform: translateY(-12px);
    }
    .learnMoreArrowContainer {
      width: 100%;
      margin-left: 63px;
    }
  }
`;
