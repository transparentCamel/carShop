import styled from 'styled-components';
import { theme } from '../../globalStyles/Theme';

export const TestimonialsStyles = styled.section`
  display: flex;
  flex-direction: column;
  padding: 128px 14%;
  background-color: ${theme.colors.lightGrey};
  .testimonialHeading {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 128px;
    h3 {
      text-align: center;
      max-width: 1024px;
    }
  }

  .testimonialCardContainer {
    display: flex;
    gap: 32px;
    align-items: center;
    justify-content: space-between;

    .testimonialCard {
      background-color: white;

      padding: 64px;
    }
    .testimonialUserInfo {
      display: flex;
      align-items: center;
      .testimonialImgContainer {
        margin-right: 16px;
      }
      .testimonialUserInfoText {
        :first-child {
          font-size: ${theme.fontSizes.title02};
        }
        p {
          margin: 0px;
        }
      }
    }
    .testimonialReviewText {
      font-size: ${theme.fontSizes.title02};
    }
  }
  .testimonialNav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 32px;
    #centerElement {
      margin-left: auto;
      transform: translatex(64px);
      display: flex;
      gap: 8px;

      div {
        width: 32px;
        height: 4px;
        background-color: #939191;
      }
      :nth-child(3) {
        background-color: ${theme.colors.primary};
      }
    }
    #endElement {
      margin-left: auto;
    }
  }
`;
