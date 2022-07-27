import { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { AuthoContext } from '../context/AuthContext';
const PrivateRouter = () => {

    const { currentUser } = useContext(AuthoContext)

    return currentUser ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRouter;