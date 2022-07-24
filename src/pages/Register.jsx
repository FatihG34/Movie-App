import React, { useState } from 'react'
import { createUser } from '../auth/firebase';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const [firstName, setFirstName] = useState();
    const [lastName, setLastName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const displayName = `${firstName} ${lastName}`;
        createUser(email, password, navigate, displayName);
        // console.log(firstName, lastName, email, password);
    };

    return (
        <div className='d-flex justify-content-center'>
            <div className='form-image d-none d-md-block'>
                <img src="https://picsum.photos/800/800" alt="randomImage" />
            </div>
            <div className="register-form">
                <h1 className="form-title display-2">Register</h1>
                <form id='register'
                    onSubmit={handleSubmit}>
                    <div className='mb-3'>
                        <label
                            htmlFor="firtsName"
                            className='form-label'>First Name</label>
                        <input
                            onChange={(e) => setFirstName(e.target.value)}
                            type="text"
                            name="firtsName"
                            id="firtsName"
                            className='form-control'
                            placeholder='Enter your first name...'
                            required />
                    </div>
                    <div className='mb-3'>
                        <label
                            htmlFor="lastName"
                            className='form-label'>Last Name</label>
                        <input
                            onChange={(e) => setLastName(e.target.value)}
                            type="text"
                            name="lastName"
                            id="lastName"
                            className='form-control'
                            placeholder='Enter your last name...'
                            required />
                    </div>
                    <div className='mb-3'>
                        <label
                            htmlFor="email"
                            className='form-label'>Email</label>
                        <input
                            onChange={(e) => setEmail(e.target.value)}
                            type="email"
                            name="email"
                            id="email"
                            className='form-control'
                            placeholder='Enter your email address...'
                            required />
                    </div>
                    <div className='mb-3'>
                        <label
                            htmlFor="password"
                            className='form-label'>Password</label>
                        <input
                            onChange={(e) => setPassword(e.target.value)}
                            type="password"
                            name="password"
                            id="password"
                            className='form-control'
                            placeholder='Enter your password...'
                            required />
                    </div>
                    <input
                        type="submit"
                        className='btn btn-primary form-control'
                        value='Register' />
                </form>
            </div >
        </div >
    )
};

export default Register