import React from 'react'

const Register = () => {
    return (
        <div className='d-flex justify-content-center'>
            <div className='form-image d-none d-md-block'>
                <img src="https://picsum.photos/800/800" alt="random-image" />
            </div>
            <div className="register-form">
                <h1 className="form-title display-2">Register</h1>
                <form id='register'>
                    <div className='mb-3'>
                        <label
                            htmlFor="firtsName"
                            className='form-label'>First Name</label>
                        <input
                            type="text"
                            name="firtsName"
                            id="firtsName"
                            className='form-control'
                            placeholder='Enter your first name...' />
                        <label
                            htmlFor="lastName"
                            className='form-label'>Last Name</label>
                        <input
                            type="text"
                            name="lastName"
                            id="lastName"
                            className='form-control'
                            placeholder='Enter your last name...' />
                        <label
                            htmlFor="email"
                            className='form-label'>Email</label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            className='form-control'
                            placeholder='Enter your email address...' />
                        <label
                            htmlFor="password"
                            className='form-label'>Password</label>
                        <input
                            type="password"
                            name="password"
                            id="password"
                            className='form-control'
                            placeholder='Enter your password...' />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Register