import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import validation from './validation/SignupValidation'

function Signup() {
    const [values, setValues] = useState({
        name:"",
        email: "",
        password: ""
    });
    const [errors, setErrors] = useState({});

    const handelInput = (e) => {
        setValues((prev) => ({ ...prev, [e.target.name]: [e.target.value] }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setErrors(validation(values));
    };

  return (
     <div className='d-flex justify-content-center align-items-center bg-primary vh-100'>
        <div className='bg-white p-3 rounded w-25'>
            <h2>Sign-Up</h2>
            <form action='' onSubmit={handleSubmit}>
                
                <div className='mb-3'>
                    <label htmlFor='Name'><strong>Name</strong></label>
                    <input type='text' placeholder='Enter your Name' name='name' className='form-control rounded-0' onChange={handelInput} />
                    {errors.email && <span className='text-danger'>{ errors.email }</span>}
                </div>
                
                <div className='mb-3'>
                    <label htmlFor='email'><strong>Email</strong></label>
                    <input type='email' placeholder='Enter your Email' name='email' className='form-control rounded-0' onChange={handelInput} />
                    {errors.name && <span className='text-danger'>{ errors.name }</span>}
                </div>
                
                <div className='mb-3'>
                    <label htmlFor='password'><strong>Password</strong></label>
                    <input type='password' placeholder='Enter your Password' name='password' className='form-control rounded-0' onChange={handelInput} />
                    {errors.password && <span className='text-danger'>{ errors.password }</span>}
                </div>
                
                <button type='submit' className='btn btn-success w-100 rounded-0'><strong>Sign up</strong></button>
                <p className='mt-2'>You are agree to our terms and policies</p>
                <Link to="/" className='btn btn-default border w-100 bg-light rounded-0 text-decoration-none'>Login</Link>
                
            </form>
        </div>
    </div>
  )
}

export default Signup