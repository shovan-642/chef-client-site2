import React from 'react';
import './Register.css'
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div>
            <Container className='w-50 mx-auto'>
    <h1>Please Register</h1>
<Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" name="email" placeholder="Enter email" required/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" name='password' placeholder="Password" required/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
      <br />
      <Form.Text className="text-success">
         
        </Form.Text>
      <Form.Text className="text-danger">
         
        </Form.Text>
      <Form.Text className="text-muted">
         Already have an account? Please <Link to="/login">Login</Link> here.
        </Form.Text>
    </Form>
</Container>
            
        </div>
    );
};

export default Register;