import { createContext, useState } from 'react';
export const AuthoContext = createContext()
const AuthContext = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(false);
    return (
        <AuthoContext.Provider value={{ currentUser, setCurrentUser }}>
            {children}
        </AuthoContext.Provider >
    )
}

export default AuthContext