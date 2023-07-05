import styled from 'styled-components';
import { theme } from '../../globalStyles/Theme';

export const HomeHeroCardStyles = styled.div`
  padding: 0px 256px 0px 256px;
  margin: 128px 0px 128px 0px;
  height: 632px;
  display: flex;
  flex-direction: row;
  :first-child {
    display: flex;
    flex-direction: column;
    word-wrap: break-word;
    width: 50%;
    h1 {
      width: 80%;
    }
    .openContainer {
      margin-top: 32px;
      display: flex;
      align-items: center;
      gap: 16px;
      :first-child {
        width: 32px;
        img {
          width: 32px;
          height: 32px;
        }
      }
      :nth-child(2) {
        p {
          width: 100%;
          margin: 0px;
        }
        :first-child {
          color: #939191;
          margin-bottom: 8px;
        }
      }
    }
  }
  :nth-child(2) {
    position: relative;
    width: 50%;

    div {
      width: 100%;
      height: 100%;

      img:not(.circleImg) {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
    .stampTop {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      background-color: white;
      box-shadow: 0 0 0 12px rgba(225, 225, 225, 0.4);
      border-radius: 60px;
      width: 282px;
      height: 102px;
      top: -86%;
      right: 5%;

      div {
        width: 70px;
        height: 71px;
        margin-right: 16px;
      }
    }
    .stampBottom {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      background-color: white;
      box-shadow: 0 0 0 12px rgba(225, 225, 225, 0.4);
      border-radius: 60px;
      height: 102px;
      width: 326px;
      position: absolute;
      top: 72%;
      right: -5%;
      .starsContainer {
        width: 185px;
        height: 36px;
      }
      .ratingContainer {
        width: 108px;
        display: flex;
        align-items: center;

        justify-content: center;
        .ratingNum,
        .ratingText {
          display: flex;

          margin: 0px;
        }
        .ratingNum {
          font-size: ${theme.fontSizes.title02};
        }
      }
    }
  }
`;
