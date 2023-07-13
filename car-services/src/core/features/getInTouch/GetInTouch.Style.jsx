import styled from 'styled-components';

export const GetInTouchStyles = styled.section`
  display: flex;
  background-color: rgb(30, 28, 28);

  padding: 128px 14%;
  color: white;
  justify-content: space-between;

  .getInTouchLeftContainer {
    display: flex;
    flex-direction: column;
    max-width: 512px;

    h3 {
      margin: 0px;
    }
    .socialIconsContainer {
      display: flex;
      gap: 16px;
      margin-top: 64px;
    }
  }
`;
