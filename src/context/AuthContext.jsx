import React, { useEffect } from 'react';
// import { useContext } from 'react';
import { useState } from 'react';
import { createContext } from 'react';
import { userObserver } from '../auth/firebase';



export const AuthoContext = createContext();



const AuthContext = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(false);

    useEffect(() => {
        userObserver(setCurrentUser)
    }, [])

    return (
        <AuthoContext.Provider value={{ currentUser }}>
            {children}
        </AuthoContext.Provider >
    )
}

export default AuthContext