import React from 'react';

const Unauthorized: React.FC = () => {
    return (
        <div className='container d-flex justify-content-center align-items-center' style={{ minHeight: '85vh' }}>
            <div className='text-center'>
                <h1 className='fs-1 fw-bold'>4O3</h1>
                <h3 className='fs-3 fw-bold text-uppercase'>Access Denied</h3>
                <p className='text-secondary'>You don't have permission to access requested page.</p>

            </div>
        </div>
    )
}

export default Unauthorized;