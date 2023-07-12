import styled from 'styled-components';
import { theme } from '../../globalStyles/Theme';

export const HowSectionStyles = styled.section`
  padding: 128px 14%;
  display: flex;
  flex-direction: column;
  .firstHowContainer,
  .secondHowContainer {
    display: flex;
    gap: 32px;
    justify-content: space-between;

    h3 {
      margin-top: 0px;
    }
  }
  .firstHowContainer {
    margin-bottom: 128px;
  }
  .firstHowContainerLeft {
    display: flex;
    flex-direction: column;
    min-width: 50%;
    padding-right: 64px;
    justify-content: space-between;
  }
  .secondHowContainerRight {
    display: flex;
    flex-direction: column;
    padding-left: 64px;
    justify-content: space-between;
    h3 {
      margin-bottom: 0px;
    }
    p {
      font-size: ${theme.fontSizes.paragraphOne};
      line-height: 1.6;
    }
  }
  .parallelPicturesLeft {
    min-width: 50%;
  }
  .parallelPicturesRight {
    min-width: 50%;
  }
`;
