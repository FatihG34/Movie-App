import { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { AuthoContext } from '../context/AuthContext';
const PrivateRouter = () => {

    const user = useContext(AuthoContext)

    return user ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRouter;