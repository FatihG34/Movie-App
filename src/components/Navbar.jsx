import React, { useContext } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { AuthoContext } from '../context/AuthContext';
import { logOut } from '../auth/firebase';


const Navbar = () => {
    const { currentUser } = useContext(AuthoContext)
    const navigate = useNavigate()
    // console.log(currentUser)

    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-primary d-flex justify-content-between p-2">
                <div className='conatiner-fluid navbar-brand'>
                    <Link to={'/'} className='text-white text-decoration-none'>
                        <h4>Movie App</h4>
                    </Link>
                </div>
                <div className='d-flex text-white align-items-center'>
                    {currentUser ? (
                        <>
                            <h5 className="mb-0 text-capitalize">
                                {currentUser.displayName}
                            </h5>
                            <button
                                onClick={() => logOut()}
                                className="ms-2 btn btn-outline-light"
                                type="submit">Logout</button>
                        </>
                    ) : (
                        <>
                            <button
                                onClick={() => navigate('/login')}
                                className="ms-2 btn btn-outline-light"
                                type="submit">Login</button>
                            <button
                                onClick={() => navigate('/register')}
                                className="ms-2 btn btn-outline-light"
                                type="submit">Register</button>
                        </>
                    )}
                </div>
            </nav>
        </div>
    )
}

export default Navbar