import styled, { css } from "styled-components";
export const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 87.4%;
  margin: 0 auto;
  text-align: left;
  h1 {
    background: ${(props) => props.theme["gradient-Titles"]};
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    font-weight: 800;
    font-size: 6rem;
  }
  h3 {
    color: ${(props) => props.theme["white"]};
    font-size: 2rem;
  }
  p {
    font-weight: 200;
  }
  @media (min-width: 1490px) {
    width: calc(100% - 30%);
  }
  @media (max-width: 600px) {
    h1 {
      font-weight: 400;
      font-size: 3rem;
    }
    h3 {
      font-size: 1rem;
      font-weight: 400;
    }
  }
  .goToAboutSection {
    width: 10rem;
  }
`;

export const ReadMoreButton = styled.button`
  border: none;
  width: 10rem;
  height: 3rem;
  border-radius: 18rem;
  color: rgb(255, 255, 255);
  background: ${(props) => props.theme["gradient-components"]};
  transition: all 0.4s ease 0s;
  font-size: 16px;
  font-weight: 600;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: none;
  transition: width 0.3s;

  &:hover {
    width: 300px;
    background-color: ${(props) => props.theme["gradient-components-hover"]};
  }
`;
export const SectionDivider = styled.div`
  & {
    width: 4rem;
    height: 0.375rem;
    border-radius: 0.625rem;
    background: ${(props) => props.theme["gradient-components"]};
  }
`;

export const ProjectsSection = styled.div`
  a:focus {
    outline: 0;
    box-shadow: 0 0 0 0;
  }

  svg {
    color: #fff;
    background-color: ${(props) => props.theme["blue-600"]};
    border-radius: 6px;
    padding: 4px;
    &:hover {
      background-color: ${(props) => props.theme["blue-500"]};
      transition: background-color 0.2s;
    }
  }
  h2 {
    background: ${(props) => props.theme["gradient-Titles"]};
    font-size: 3rem;
    font-weight: bold;
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

export const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
export const BackToTop = styled.button`
  abbr {
    &:hover {
      transform: scale(1.1);
      cursor: pointer;
      color: ${(props) => props.theme["blue-600"]};
      transition: color 0.3s;
    }
  }
  position: fixed;
  right: 2rem;
  bottom: 5rem;
  display: none;
  border: none;
  background: transparent;
  color: ${(props) => props.theme["blue-500"]};

  &:focus {
    outline: 0;
    box-shadow: 0 0 0 0;
  }
`;
