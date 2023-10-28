import React, { useContext } from 'react';
import './Register.css'
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProviders';

const Register = () => {

const {createUser}=useContext(AuthContext);

const handleRegister = event => {
  event.preventDefault();

  const form = event.target;
  const name = form.name.value
  const email = form.email.value;
  const password = form.password.value;
  const confirm = form.confirm.value;
  const photoUrl = form.photo.value;

  console.log(name, email, password, confirm, photoUrl)

  createUser(email, password)
  .then(result=>{
    const createdUser = result.user;
    console.log(createdUser);
  })

  .catch(error =>{
    console.log(error)
  })

}

    return (
        <div>
            <Container className='w-50 mx-auto'>
    <h1>Please Register</h1>
<Form onSubmit={handleRegister}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control type="name" name="name" placeholder="Name" required/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Photo Url</Form.Label>
        <Form.Control type="text" name="photo" placeholder="Photo Url" required/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" name="email" placeholder="Enter email" required/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" name='password' placeholder="Password" required/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Confirm Password</Form.Label>
        <Form.Control type="password" name='confirm' placeholder="Confirm Password" required/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" name='accept' label="Accept Terms & Conditions." />
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