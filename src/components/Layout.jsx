import React, { Suspense } from 'react';
import { Link, Outlet } from 'react-router-dom';

const Layout = () => {
    return (
        <>
            <nav>
                <ul style={{ display: 'flex', listStyle: 'none' }}>
                    <li style={{ padding: '0 10px' }}>
                        <Link style={{ textDecoration: 'none' }} to="/">
                            Home
                        </Link>
                    </li>
                    <li style={{ padding: '0 10px' }}>
                        <Link style={{ textDecoration: 'none' }} to="/about">
                            About
                        </Link>
                    </li>
                </ul>
            </nav>
            <Suspense fallback={<h1>Loading...</h1>}>
                <Outlet />
            </Suspense>
        </>
    );
};

export default Layout;
