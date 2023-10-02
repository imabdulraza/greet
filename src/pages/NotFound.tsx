import React from 'react';

const NotFound: React.FC = () => {
    return (
        <div className='container d-flex justify-content-center align-items-center' style={{ minHeight: '85vh' }}>
            <div className='text-center'>
                <h1 className='fs-1 fw-bold'>4O4</h1>
                <h3 className='fs-3 fw-bold text-uppercase'>Not found</h3>
                <p className='text-secondary'>Oops! The page you are looking for is not found.</p>
            </div>
        </div>
    )
}

export default NotFound;