import styled from 'styled-components';

export const StepsSectionStyles = styled.section`
  display: flex;
  padding: 0px 14%;
  gap: 64px;
  margin-bottom: 128px;
  .stepsSectionLeftContainer {
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    h3 {
      margin: 0px;
    }
  }
  .stepsSectionRightContainer {
    width: 50%;
    img {
      width: 100%;
      height: auto;
    }
  }
`;
