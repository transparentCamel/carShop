import styled from 'styled-components';

export const BlogSingleSectionStyles = styled.section`
  padding: 128px 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  .blogSingleHeadingContainer {
    padding: 0px 28%;
  }
  .blogSingleLastContainer {
    padding: 0px 28%;
    display: flex;
    flex-direction: column;
    align-items: center;
    h4 {
      font-size: 40px;
    }
  }
  .blogSingleImageContainer {
    margin: 64px 0px;
    width: 100%;

    img {
      width: 100%;
    }
  }
  .first {
    display: flex;
    justify-content: center;
    width: 100%;
    img {
      width: calc(100% - 28%);
      width: calc(100% - 28%);
    }
  }
  .body01 {
    margin: 32px 0px;
    border-left: 3px solid #1e1b1b;
    padding: 16px 32px;
  }
`;
