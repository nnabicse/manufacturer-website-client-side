import React, { useEffect, useRef } from 'react';
import './Login.css'
import { Form } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../Loading/Loading';
import SocialLogin from '../SocialLogin/SocialLogin';
import Swal from 'sweetalert2'
import useToken from '../../../hooks/useToken';
const axios = require('axios').default;

const Login = () => {
    const emailRef = useRef("");
    const passwordRef = useRef("");
    const navigate = useNavigate();

    const location = useLocation()
    const from = location.state?.from?.pathname || "/";
    const [sendPasswordResetEmail, sending, errorReset] = useSendPasswordResetEmail(
        auth
    );
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const [token] = useToken(user);
    if (token) {
        navigate(from, { replace: true });
    }
    if (loading) {
        return <Loading></Loading>;
    }
    let errorElement;
    if (error || errorReset) {
        errorElement = <div>
            <p className='text-danger'>Error: {error?.message}{errorReset?.message}</p>
        </div>
    }
    const handleSubmit = async event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        await signInWithEmailAndPassword(email, password);
        const { data } = await axios.post('https://fathomless-sands-04290.herokuapp.com/login', { email });
        localStorage.setItem('accessToken', data.accessToken)
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Login Successfull',
            showConfirmButton: false,
            timer: 1500
        })
    }



    const navigateRegister = event => {
        navigate('/register')
    }

    const resetPassword = async () => {
        const email = emailRef.current.value;
        if (email) {
            await sendPasswordResetEmail(emailRef.current.value);
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Password Reset E-mail Sent',
                showConfirmButton: false,
                timer: 1500
            })
        }
        else {
            Swal.fire({
                position: 'top-end',
                icon: 'error',
                title: 'Please Enter Email',
                showConfirmButton: false,
                timer: 1500
            })
        }
    }
    return (
        <div className='login-container'>
            <div className='section-header-container'>
                <h1 className='section-header'>Login</h1>
            </div>
            <div className='form-and-text-container'>
                <Form className='form' onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control required ref={emailRef} type="email" placeholder="Enter email" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Control required ref={passwordRef} type="password" placeholder="Password" />
                    </Form.Group>
                    {errorElement}
                    <button className='btn btn-primary' type='submit'>Login</button>
                </Form>
                <p>New Here? <Link to='/register' className='text-danger pe-auto text-decoration-none' onClick={navigateRegister}>Please Register</Link></p>
                <p>Forgot Password? <Link onClick={resetPassword} to='' className='text-danger pe-auto text-decoration-none'>Reset Password</Link></p>
                <SocialLogin></SocialLogin>
            </div>
        </div>
    );
};

export default Login;