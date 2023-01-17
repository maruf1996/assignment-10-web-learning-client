import React, { useContext, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { FaFacebook, FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';
import './Login.css';

const Login = () => {
    const [error, setError] = useState('');
    const {signIn,signInGoogle,signInFacebook }=useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";

    const handleSubmit=event=>{
        event.preventDefault();
        const form=event.target;

        const email=form.email.value;
        const password=form.password.value;
        console.log(email,password);

        signIn(email,password)
        .then((result) => {
            const user = result.user;
            console.log(user);
            form.reset();
            setError('');
            navigate(from, { replace: true });
          })
          .catch((error) => {
            console.error(error);
            setError(error.message)
          })
    }

    const handleGoogleSignIn=()=>{
        signInGoogle()
        .then((result) => {
            const user = result.user;
            console.log(user);
            navigate(from, { replace: true });
          }).catch((error) => {
            console.error(error);
            setError(error.message)
          });
    }
    const handleFacebookSignIn=()=>{
        signInFacebook()
        .then((result) => {
            const user = result.user;
            console.log(user);
            navigate(from, { replace: true });
          }).catch((error) => {
            console.error(error);
            setError(error.message)
          });
    }
    
    return (
    <div className="login_form">
        <Form onSubmit={handleSubmit}>
            <h3 className='mb-3'>Log in to Web School</h3>
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control name='email' className='border border-2 border-info' type="email" required/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control name='password' className='border border-2 border-info' type="password" required/>
        </Form.Group>
        <Form.Text className="text-danger d-block mb-3">
                {error}
        </Form.Text>
        <Button className='text-light fw-bold' variant="info" type="submit">
            Log in
        </Button>
        </Form>
        <div className='mt-4'>
            <h6>Or log in using:</h6>
            <div className="mt-2">
                <button onClick={handleGoogleSignIn} className='w-50 py-2 mt-3 d-block fw-bold border-0 bg-danger text-light'><FaGoogle className='me-1 mb-1'/> Sign In Google</button>
                <button onClick={handleFacebookSignIn} className='w-50 py-2 mt-3 d-block fw-bold border-0 bg-primary text-light'><FaFacebook className='me-1 mb-1'/> Sign In Facebook</button>
            </div>
            <p className='mt-4'>Not a member yet? <Link className='text-decoration-none fw-bold' to='/register'>Sign up for free</Link></p>
        </div>
    </div>
  );
}

export default Login;