import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { common } from '../common';
import { Roles } from '../config/Roles';
import useAuth from '../hooks/useAuth';

const AdminRoutes = [
    { name: 'Dashboard', route: '/admin/dashboard' },
    { name: 'Projects', route: '/admin/projects' },
    { name: 'Features', route: '/admin/features' },
    { name: 'About', route: '/admin/about' },
    { name: 'Contact', route: '/admin/contact' },
    { name: 'Online Status', route: '/admin/online-status' },
];

const UserRoutes = [
    { name: 'Dasboard', route: '/user/dashboard' },
    { name: 'Projects', route: '/user/projects' },
    { name: 'Features', route: '/user/features' },
    { name: 'About', route: '/user/about' },
    { name: 'Contact', route: '/user/contact' },
    { name: 'Online Status', route: '/user/online-status' },
];

const Header: React.FC = () => {
    const user = useAuth();
    const navigate = useNavigate();
    const role = common.getUserRole();

    const handleLogout = () => {
        localStorage.removeItem('userInfo');
        navigate('/login');
    };

    return (
        <div className='container mb-2'>
            <nav className="navbar navbar-expand-lg navbar-light bg-white border-bottom">
                <div className="container-fluid">
                    <a className="navbar-brand">Greetings<span className='orange'>!</span></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            {role === Roles.ADMIN &&
                                AdminRoutes.map((item, index) =>
                                    <li key={index} className="nav-item">
                                        <NavLink
                                            to={item.route}
                                            className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
                                            aria-current="page"
                                        >
                                            {item.name}
                                        </NavLink>
                                    </li>
                                )}

                            {role === Roles.USER &&
                                UserRoutes.map((item, index) =>
                                    <li key={index} className="nav-item">
                                        <NavLink
                                            to={item.route}
                                            className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
                                            aria-current="page"
                                        >
                                            {item.name}
                                        </NavLink>
                                    </li>
                                )}

                        </ul>
                        {(user && role)
                            ? <ul className='navbar-nav ms-auto'>
                                <li className="nav-item">
                                    <a
                                        onClick={handleLogout}
                                        className='nav-link logout'
                                        aria-current="page"
                                    >
                                        Logout
                                    </a>
                                </li>
                            </ul>
                            : <ul className='navbar-nav ms-auto'>
                                <li className="nav-item">
                                    <NavLink
                                        to={'/login'}
                                        className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
                                        aria-current="page"
                                    >
                                        Login
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink
                                        to={'/register'}
                                        className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
                                        aria-current="page"
                                    >
                                        Register
                                    </NavLink>
                                </li>
                            </ul>}
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Header;