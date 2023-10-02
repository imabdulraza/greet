import React, { useEffect } from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { common } from '../common';
import useAuth from '../hooks/useAuth';
import NotFound from '../pages/NotFound';
import Unauthorized from '../pages/Unauthorized';

interface RouteProps {
    requiredRoles: string[];
}

const PrivateRoutes:React.FC<RouteProps> = ({requiredRoles, ...rest}) => {
    const user = useAuth();
    const location = useLocation();
    const role = common.getUserRole();
    const userHasRole = requiredRoles.includes(role);

    return(
        <div className='container'>
            {user && userHasRole
                ? <Outlet /> 
                : user 
                    ? <Unauthorized />
                    : <Navigate replace to={'/login'} state={{from: location}}/>}
        </div>
    )
};

export default PrivateRoutes;