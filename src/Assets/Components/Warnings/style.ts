import styled from 'styled-components';
import bgImage from "../../../images/subtle-prism.svg"
interface ModalProps {
    blurry: boolean;
    displayModal: boolean;
  }
  
export const Warning = styled.div`
  display: none;
`
export const Wrapper = styled.div<ModalProps>`
display: ${props =>  props.displayModal ? "flex" : "none"};
  position: fixed;
  justify-content: center;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  &::before {
    content: ""; 
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: inherit;
    backdrop-filter: ${props => props.blurry ? "blur(10px)" : "none"};
    z-index: -1;
  }
`;
interface MainProp{
    height: boolean;
}

export const Main = styled.div<MainProp>`
  height: ${props => props.height ? "90vh" : "inherit"};
  overflow: hidden;
`;

export const Modal = styled.div`
margin-top: 80px;
  border-radius: 15px;
  display: flex;
  position: absolute;
  height: 80vh;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 90vw;
  z-index: 1;
  padding: 0 4rem 2rem;
  background-image: url(${bgImage});

  .modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 0;
    backdrop-filter: blur(10px);
  }

  .closeButton {
    margin-top: 0;
    position: absolute;
    top: 1rem;
    right: 2rem;
    background: ${props => props.theme['gradient-components']};
    -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    font-size:1.75rem;
    transition: font-size 0.2s ease-out;

    &:hover {
    font-size: 2rem;
    background: ${props => props.theme['gradient-components-hover']};
    -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      cursor: pointer;
    }
  }

  .warningText {
    text-align: center;

    h4 {
      background: ${props => props.theme['gradient-Titles']};
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      font-weight: bold;
    }

    article {
      color: #ffff;
    }

  }
`
