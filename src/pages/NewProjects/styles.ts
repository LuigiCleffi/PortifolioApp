import styled from "styled-components";
import { Card } from "react-bootstrap";
import { Code } from "phosphor-react";

export const NewProjectContainer = styled.div`
  padding: 3rem;
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns:1fr 1fr 3fr;
`;

const inputShared = {
    padding:' 0.8rem',
    fontSize: '1rem',
    borderRadius: '5px',
    backgroundColor: '#20262E',
    border: 'none',
    marginBottom: '5px',
    color: '#fff',

} as const

export const FormContainer = styled.div`
h1{
    background: ${props => props.theme['gradient-Titles']};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-weight: 450; 
    font-size: 3.75rem;
}
  label {
    color: white;
    font-weight: bold;
    font-size: 0.8em;
    background-color: ${(props) => props.theme["gradient-Titles"]};
    margin-bottom: 8px;
  }
  input {
   ${inputShared}
   width: 100%;
    &:focus {
      outline: none;
      border-color: #537fe7;
    }
  }

  textarea{
    ${inputShared}
    resize: none;

    &:focus {
      outline: none;
      border-color: #537fe7;
    }
  }

  article {
    color: #bdcdd645;
    font-size: 12px;
  }

  button {
    padding: 0.75rem 1.5rem;
    margin-top: 7px;
    font-size: 1rem;
    background-color: #537fe7;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    &:hover {
      background-color: #3f6ac2;
    }
  }

`;

export const ProfilePic = styled.div`
  position: relative;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .add-button {
    position: absolute;
    bottom: -40px;
    right: 0;
    width: 40px;
    height: 40px;
    padding: 0.7rem;
    border-radius: 50%;
    border: none;
    background-color: #4285f4;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: all 0.3s ease;
    margin: 0 3rem;
    color: white;
  }

  &:hover .add-button {
    bottom: 0;
    background-color: rgba(66, 133, 244, 0.8);
  }
`;


export const CardContainer = styled(Card)`
margin: 0 auto;
  width: 23rem; 
  padding: 1rem;
  transition: 0.35s;
  &:hover{
    box-shadow: 5px 5px 10px 2px rgba(233, 233, 233, 0.245);
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