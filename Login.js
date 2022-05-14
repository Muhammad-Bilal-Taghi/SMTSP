import React from 'react'
import {Form, Button} from 'react-bootstrap'

const Login = () => {
  return  (
         <><Form>
  <Form.Group className="mt-6" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group className="mt-5" controlId="formBasicPassword">
    <Form.Label className="">Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Form.Group className="mt-5" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  <Button variant="primary btn-block" type="submit">
    LOGIN
  </Button>
</Form>
    </>
    
  
  
)
}

export default Login