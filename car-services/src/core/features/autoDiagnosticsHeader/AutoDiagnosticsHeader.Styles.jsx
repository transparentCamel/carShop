import styled from 'styled-components';

export const AutoDiagnosticsHeaderStyles = styled.section`
  padding: 128px 14%;
  h1 {
    margin-top: 0px;
    margin-bottom: 128px;
  }
  .diagnosticsMainContainer {
    display: flex;
    gap: 64px;
    .diagnosticsLeftContainer {
      display: flex;
      flex-direction: column;
      min-width: 28%;
      .otherServicesContainer {
        gap: 32px;
        background-color: #f5f5f5;
        display: flex;
        flex-direction: column;
        padding: 32px;
        margin-bottom: 32px;
        p {
          margin: 0px;
        }
        div {
          padding-top: 64px;
          padding-bottom: 48px;
        }
      }
    }
    .diagnosticsRightContainer {
      div {
        height: 28%;
        img {
          width: 100%;
          height: 100%;
        }
      }
      h4 {
        font-size: 40px;
      }
      .firstPara {
        margin-bottom: 64px;
      }
      .secondPara {
        margin-bottom: 64px;
      }
      .body01 {
        margin-top: 32px;
        border-left: 3px solid #1e1b1b;
        padding: 16px 32px;
      }
    }
  }
`;
