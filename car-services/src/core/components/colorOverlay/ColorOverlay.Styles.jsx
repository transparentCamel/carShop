import styled from 'styled-components';

export const ColorOverlayStyles = styled.div`
  position: relative;
  display: inline-block;

  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: ${({ backgroundColor }) => backgroundColor};
    opacity: 0.9;
  }
  .overlayContent {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: #fff;
    display: flex;
    flex-direction: column;
    width: 80%;
    height: 100%;
    justify-content: center;

    h4 {
      font-size: 40px;
    }
  }
`;
