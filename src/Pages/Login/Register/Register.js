import React, { useRef, useState } from 'react';
import { Form } from 'react-bootstrap';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../Loading/Loading';
import SocialLogin from '../SocialLogin/SocialLogin';
import Swal from 'sweetalert2';
import './Register.css';
import useToken from '../../../hooks/useToken';

const Register = () => {
    const emailRef = useRef("");
    const nameRef = useRef("");
    const passwordRef = useRef("");
    const checkRef = useRef("");
    const [agree, setAgree] = useState(false);
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);
    const [
        createUserWithEmailAndPassword,
        user,
        loadingCreate,
        errorCreate,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const navigate = useNavigate();
    const [token] = useToken(user);
    if (token) {
        navigate('/home')
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Sign Up Succesfull',
            showConfirmButton: false,
            timer: 1500
        })
    }
    if (loadingCreate || updating) {
        return <Loading></Loading>
    }

    let errorElement;
    if (errorCreate || updateError) {
        errorElement = <div>
            <p className='text-danger'>Error: {errorCreate?.message || updateError?.message}</p>
        </div>
    }

    const handleRegister = async (event) => {
        event.preventDefault();
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: name })
    }

    const navigateLogin = event => {
        navigate('/login')
    }

    return (
        <div className='login-container'>
            <div className='section-header-container'>
                <h1 className='section-header'>Register</h1>
            </div>
            <div className='form-and-text-container'>
                <Form className='register-form' onSubmit={handleRegister}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">

                        <Form.Control ref={nameRef} required type="name" placeholder="Enter name" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicName">

                        <Form.Control ref={emailRef} required type="email" placeholder="Enter email" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">

                        <Form.Control ref={passwordRef} required type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check className={agree ? 'text-primary' : 'text-danger'} onClick={() => setAgree(!agree)} ref={checkRef} type="checkbox" label="Accept Terms and Conditions" />
                    </Form.Group>
                    {errorElement}
                    <button disabled={!agree} className='btn btn-primary' type='submit'>Submit</button>
                </Form>
                <p>Already Have a Account? <Link to='/login' className='text-primary pe-auto text-decoration-none' onClick={navigateLogin}>Please Login</Link></p>
                <SocialLogin></SocialLogin>
            </div>
        </div>
    );
};

export default Register;