import React, { useContext } from 'react';
import './Login.css'
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProviders';

const Login = () => {

  const {signIn} = useContext(AuthContext)

  const handlesignIn = event => {

      event.preventDefault();
    
      const form = event.target;
      const email = form.email.value;
      const password = form.password.value;

    
      console.log(email, password)
    
      signIn(email, password)
      .then(result=>{
        const loggedUser = result.user;
        console.log(loggedUser);
      })
    
      .catch(error =>{
        console.log(error)
      })

  }
    return (
        <div>
<Container className='w-50 mx-auto'>
    <h1>Please Login</h1>
<Form onSubmit={handlesignIn}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" name="email" placeholder="Enter email" required/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" name='password' placeholder="Password" required/>
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
         New in Savory? Please <Link to="/register">Register</Link> here.
        </Form.Text>
    </Form>
</Container>
        </div>
    );
};

export default Login;