import styled from 'styled-components';
import { theme } from '../../globalStyles/Theme';

export const OfferSectionStyles = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 128px 14% 128px 14%;
  background-color: ${theme.colors.lightGrey};
  .offerSectionTextContainer {
    display: flex;
    flex-direction: column;
    max-width: 1400px;

    p,
    h2 {
      padding: 0px 256px;
      word-break: break-word;
      text-align: center;
      margin: 0px;
    }
    p {
      font-size: ${theme.fontSizes.title02};
      margin: 0px;
    }
    h2 {
      font-size: ${theme.fontSizes.h2};
    }
  }
  .OfferIconCardContainer {
    margin-top: 128px;
    display: flex;
    flex-direction: column;
    width: 100%;

    gap: 16px;
    align-items: center;
    justify-content: space-between;

    .row {
      display: flex;
      width: 100%;
      align-items: center;
      justify-content: space-between;
      gap: 16px;

      div {
        width: 100%;
        height: 232px;
      }
    }
  }
  .OfferArrowContainer {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    margin-top: 64px;
  }
`;
