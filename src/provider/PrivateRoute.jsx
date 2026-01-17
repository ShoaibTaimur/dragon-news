import React, { useContext } from 'react';
import { AuthContext } from './AuthProvider';
import { Navigate, useLocation } from 'react-router';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location=useLocation();
    console.log(location);
    if (loading) {
        return <div className='flex justify-center items-center min-h-screen'>
            <span className="loading loading-infinity loading-xl"></span>
        </div>;
    }
    if (user && user?.email) {
        return children;
    }
    else {
        return <Navigate state={location.pathname} to="/auth/login"></Navigate>
    }
};

export default PrivateRoute;
