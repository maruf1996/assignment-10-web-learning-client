import React, { useContext, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { FaFacebook, FaGoogle } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';
import './Register.css';

const Register = () => {
    const [error, setError] = useState('');
    const {createUser,updateUserProfile,signInGoogle,signInFacebook}=useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";

    const handleSubmit=event=>{
        event.preventDefault();
        const form=event.target;

        const name=form.name.value;
        const photoURL=form.photoURL.value;
        const email=form.email.value;
        const password=form.password.value;
        console.log(name,photoURL,email,password);

        createUser(email,password)
        .then((result) => {
            const user = result.user;
            console.log(user);
            form.reset();
            setError('');
            navigate(from, { replace: true });
            handleUpdateUserProfile(name,photoURL);
            window.location.reload();
          })
          .catch((error) => {
            console.error(error);
            setError(error.message);
          });
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

    const handleUpdateUserProfile = (name, photoURL) => {
        const profile = {
            displayName: name,
            photoURL: photoURL
        }

        updateUserProfile(profile)
            .then(() => { })
            .catch(error => console.error(error));
    }

    return (
        <div className="register_form">
        <Form onSubmit={handleSubmit}>
            <h3 className='mb-3'>Get started for free</h3>
        <Form.Group className="mb-3">
            <Form.Label>Name</Form.Label>
            <Form.Control name='name' className='border border-2 border-info' type="text"/>
        </Form.Group>
        
        <Form.Group className="mb-3">
            <Form.Label>photo URL</Form.Label>
            <Form.Control name='photoURL' className='border border-2 border-info' type="text"/>
        </Form.Group>

        <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control name='email' className='border border-2 border-info' type="email" required/>
        </Form.Group>

        <Form.Group className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control name='password' className='border border-2 border-info' type="password"/>
        </Form.Group>
        <Form.Text className="text-danger d-block mb-3">
                {error}
        </Form.Text>
        <Button className='text-light fw-bold' variant="info" type="submit" required>
            Sign Up
        </Button>
        </Form>
        <div className='mt-4'>
            <h6>Or sign up using:</h6>
            <div className="mt-1">
                <button onClick={handleGoogleSignIn} className='w-50 py-2 mt-3 d-block fw-bold border-0 bg-danger text-light'><FaGoogle className='me-1 mb-1'/> Sign In Google</button>
                <button onClick={handleFacebookSignIn} className='w-50 py-2 mt-3 d-block fw-bold border-0 bg-primary text-light'><FaFacebook className='me-1 mb-1'/> Sign In Facebook</button>
            </div>
            <p className='mt-3'>Already have an account? <Link className='text-decoration-none fw-bold' to='/login'>Log in</Link></p>
        </div>
    </div>
    );
};

export default Register;