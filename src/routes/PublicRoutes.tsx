import React, { useEffect } from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { common } from '../common';
import { Roles } from '../config/Roles';
import useAuth from '../hooks/useAuth';

const PublicRoutes:React.FC = () => {
    const user = useAuth();
    const location = useLocation();
    const role = common.getUserRole();

    console.log(role, user)

    return(
        <div className='container'>
            {user 
                ? <Navigate 
                    replace 
                    to={role === Roles.USER ? '/user/dashboard' : role === Roles.ADMIN ? '/admin/dashboard' : '/user/home'} 
                    state={{from: location}}
                /> 
                : <Outlet />}
        </div>
    )
}

export default PublicRoutes;