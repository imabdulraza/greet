import React from 'react';

const Dashoard: React.FC = () => {
    return (
        <div className='container'>
            <h4 className='fs-6 fw-bold'>Dashboard</h4>
            <div className="row">
                <div className="col-sm-4 mb-4">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Completed</h5>
                            <p>{process.env.REACT_APP_DEV_MODE}</p>
                            <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                        </div>
                    </div>
                </div>
                <div className="col-sm-4  mb-4">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">In Progress</h5>
                            <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                        </div>
                    </div>
                </div>
                <div className="col-sm-4  mb-4">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Pending</h5>
                            <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 mb-4">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">New Arrivals</h5>
                            <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6  mb-4">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Daily Feeds</h5>
                            <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashoard;