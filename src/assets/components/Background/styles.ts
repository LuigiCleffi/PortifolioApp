import styled from 'styled-components';
import bgImage from "../../../images/subtle-prism.svg"

export const BackgroundImage = styled.div`
  background-image: url(${bgImage});
  background-size: cover;
  background-position: center center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
  overflow:auto;
  `;

export const PageContainer = styled.div`
  position: relative;
  z-index: 1;
`;