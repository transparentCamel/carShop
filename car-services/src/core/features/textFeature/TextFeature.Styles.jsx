import styled from 'styled-components';

export const TextFeatureStyles = styled.div`
  display: flex;
  margin-bottom: 32px;
  .textFeatureSvgContainer {
    width: 47px;
    margin-right: 16px;
  }
  .textFeatureTextContainer {
    flex: 1;
    margin-top: 8px;
    :first-child {
      margin-bottom: 16px;
    }
    p {
      margin: 0px;
    }
  }
`;
