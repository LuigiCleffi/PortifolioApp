import { Button, Form } from "react-bootstrap";
import { FormLabel, LoginContainer } from "./styles";

export function Login() {
    return (
<LoginContainer>
    <h1 className="text-light">Login</h1>
   <Form>
   <Form.Group className="text-light" controlId="formBasicEmail">
        <FormLabel>Email address</FormLabel>     
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
   </Form.Group>
   <Form.Group className="mb-3" controlId="formBasicPassword">
        <FormLabel>Password</FormLabel>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
</LoginContainer>
    )
}