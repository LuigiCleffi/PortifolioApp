import { Container, Form } from 'react-bootstrap';
import styled from "styled-components";


export const LoginContainer = styled(Container)`
  width: 30vw;
  height: 50vh;
  padding: 2.9rem;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 12px;
  background-color: ${props => props.theme["gray-800"]};

  @media(max-width: 980px){
    &{
      width: 75vw;
    }
  }
  @media(max-width: 589px){
    &{
      width: 90vw;
    }
  }
`
export const FormLabel = styled(Form.Label)`
  color:  ${props => props.theme.white}
`