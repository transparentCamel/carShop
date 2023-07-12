import styled from 'styled-components';

export const PersonCardStyles = styled.div`
  position: relative;
  display: inline-block;

  .cardImage {
    display: block;
    width: 100%;
    height: auto;
  }

  .cardOverlay {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 96px;
    background-color: #161616;
  }

  .cardContent {
    position: absolute;
    bottom: 0px;
    width: 100%;
    height: 96px;
    color: #fff;
    text-align: center;
    padding: 16px;

    box-sizing: border-box;
    p {
      margin: 0px;
    }
    .cardTitle {
      margin-bottom: 8px;
    }
    
`;
