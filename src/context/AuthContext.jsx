import { createContext, useState } from 'react';
export const AuthoContext = createContext()
const AuthContext = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(false);
    const values = { currentUser, setCurrentUser }
    return (
        <AuthoContext.Provider value={values}>
            {children}
        </AuthoContext.Provider >
    )
}

export default AuthContext