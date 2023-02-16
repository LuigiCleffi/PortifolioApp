import styled from "styled-components";
import { Card } from "react-bootstrap";
import { Code, Pencil, Trash } from "phosphor-react";


export const CardContainer = styled(Card)`
margin: 0 auto;
  width: 23rem; 
  padding: 1rem;
  transition: 0.35s;
  background-color: ${props => props.theme["gray-400"]};
  margin-bottom: 15px;
  &:hover{
    z-index: 1;
    box-shadow: 5px 5px 10px 2px ${props => props.theme["gray-100"]};
    transform: scale(1.1);
 } 
`


export const CardFooter = styled(Card.Footer)`
 .buttons{
   
 display: flex;
 justify-content: space-between;
 align-items: center;
 margin-top: 15px;
 
a{
  text-decoration: ${props => props.theme.white};
  color: white;
  &:focus{
    outline: none;
    box-shadow: 0 0 0 0;
  }
}
 }
`
export const CodeIcon = styled(Code)`
  background-color: ${props => props.theme["blue-600"]};
  border-radius: 6px;
  padding: 4px;
  cursor: pointer;
  &:hover{
    background-color: ${props => props.theme["blue-500"]};
    transition: background-color 0.2s;
  }
  `
  export const EditContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    svg{
      position: absolute;
      margin: 10px;
      cursor: pointer;
  background-color: ${props => props.theme["red-600"]};
  &:hover{
    background-color: ${props => props.theme["red-300"]};
  }

    }
  `
type EditVariants = {
  isVisible?: boolean;
};

export const TrashIcon = styled(Trash)<EditVariants>`
  display: ${(props) => (props.isVisible ? "block" : "none")};
`;
