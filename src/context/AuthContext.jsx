import { createContext, useEffect, useState } from 'react';
import { userObsever } from '../auth/firebase';




export const AuthoContext = createContext();



const AuthContext = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(false);

    useEffect(() => {
        userObsever(setCurrentUser)
    }, [])
    return (
        <AuthoContext.Provider value={{ currentUser }}>
            {children}
        </AuthoContext.Provider >
    )
}

export default AuthContext