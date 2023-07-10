import styled from 'styled-components';
import { theme } from '../../globalStyles/Theme';

export const FaqStyles = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 128px 14%;
  background-color: ${theme.colors.steelGrey};
  h3 {
    margin-bottom: 128px;
  }
  .faqCardContainer {
    width: 80%;
    display: flex;
    flex-direction: column;
    gap: 16px;
    .faqCard {
      padding: 32px;
      display: flex;
      background-color: white;
      justify-content: space-between;
      gap: 32px;
      .faqTextContainer {
        .faqBody {
          width: 80%;
        }
      }
      .faqButtonContainer:not(.openned) {
        display: flex;
        align-items: center;
      }
    }
  }
`;
