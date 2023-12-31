import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import validation from './validation/LoginValidation';
// import axios from "axios";


function Login() {
    const [values, setValues] = useState({
        email: '',
        password: ''
    })
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    const handelInput = (e) => {
        setValues(prev => ({ ...prev, [e.target.name]: e.target.value }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setErrors(validation(values));
        navigate("/");
    }
    
  return (
    <div className='d-flex justify-content-center align-items-center bg-primary vh-100'>
        <div className='bg-white p-3 rounded w-25'>
            <h2>Log in</h2>
            <form onSubmit={handleSubmit}>
                
                <div className='mb-3'>
                    <label htmlFor='email'><strong>Email</strong></label>
                    <input type='email' placeholder='Enter your Email' className='form-control rounded-0' onChange={handelInput} name='email' />
                    {errors.email && <span className='text-danger'>{ errors.email }</span>}
                </div>
                
                <div className='mb-3'>
                    <label htmlFor='password'><strong>Password</strong></label>
                    <input type='password' placeholder='Enter your Password' className='form-control rounded-0' onChange={handelInput} name='password' />
                    {errors.password && <span className='text-danger'>{ errors.password }</span>}
                </div>
                
                <button type='submit' className='btn btn-success w-100 rounded-0'><strong>Log in</strong></button>
                <p className='mt-2'>You are agree to our terms and policies</p>
                <Link to="/signup" className='btn btn-default border w-100 bg-light rounded-0 text-decoration-none'>Create Account</Link>
                
            </form>
        </div>
    </div>
  )
}

export default Login