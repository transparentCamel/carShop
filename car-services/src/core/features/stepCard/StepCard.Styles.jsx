import styled from 'styled-components';
import { theme } from '../../globalStyles/Theme';

export const StepCardStyles = styled.div`
  display: flex;
  flex-direction: row;

  .bubbleContainer {
    width: 72px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-right: 32px;
    .circleImageContainer {
      height: 72px;
      margin-bottom: 16px;
    }
  }
  .stepCardTextContainer {
    margin-top: 12px;
    p {
      margin: 0px;
    }
    :first-child {
      font-size: ${theme.fontSizes.title01};
    }
    :not(:first-child) {
      width: 50%;
    }
  }
`;
