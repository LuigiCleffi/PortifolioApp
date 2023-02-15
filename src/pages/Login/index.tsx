import { InputGroup, Form } from "react-bootstrap";
import { ContainerLoginForm, LoginContainer } from "./styles";

export function Login() {
    return (
        <LoginContainer>
            <ContainerLoginForm variant="sm">
                <InputGroup className="mb-3">
                    <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
                    <Form.Control
                        placeholder="Username"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                    />
                </InputGroup>
            </ContainerLoginForm>

        </LoginContainer>
    )
}