import React from 'react';
import { Link } from 'react-router-dom';

const Features: React.FC = () => {
    return (
        <div className='container'>
            <h4 className='fs-6 fw-bold'>Features</h4>
            <div className="row">
                <div className="col-sm-6 mb-4">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">useEffect</h5>
                            <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                            <Link to={'/user/projects/user-form'} className="btn btn-primary px-5">Edit</Link>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 mb-4">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">useState</h5>
                            <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                            <Link to={'/user/projects/user-form'} className="btn btn-primary px-5">Edit</Link>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 mb-4">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">useMemo</h5>
                            <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                            <Link to={'/user/projects/user-form'} className="btn btn-primary px-5">Edit</Link>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 mb-4">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">useCallback</h5>
                            <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                            <Link to={'/user/features/use-callback'} className="btn btn-primary px-5">Edit</Link>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 mb-4">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">useTransition</h5>
                            <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                            <Link to={'/user/projects/user-form'} className="btn btn-primary px-5">Edit</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Features;