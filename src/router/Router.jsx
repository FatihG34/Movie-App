import React, { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { auth } from '../auth/firebase'
import Navbar from '../components/Navbar'
import { MovieContext } from '../context/AuthContext'
import Login from '../pages/Login'
import Main from '../pages/Main'
import MovieDetail from '../pages/MovieDetail'
import Register from '../pages/Register'
import PrivateRouter from './PrivateRouter';


const Router = () => {
    const [user, setUser] = useState(null);

    // useEffect(() => {
    //     auth.onAuthStateChanged(authUser => {
    //         if (authUser) {
    //             setUser(authUser);
    //         } else {
    //             setUser(null)
    //         }
    //     })
    // }, [])
    return (
        <MovieContext.Provider value={{ user, setUser }}>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path='/' element={<Main />} />
                    <Route path='login' element={<Login />} />
                    <Route path='register' element={<Register />} />
                    <Route path='movieDetail' element={<PrivateRouter />}>
                        <Route path='' element={<MovieDetail />} />
                    </Route>
                    {/* {user && <Route path='movieDetail' element={<MovieDetail />} />} */}
                </Routes>
            </BrowserRouter>
        </MovieContext.Provider>
    )
}

export default Router