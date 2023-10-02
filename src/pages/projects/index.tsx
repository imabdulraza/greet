import React from 'react';
import { Link } from 'react-router-dom';

const Projects: React.FC = () => {
    return (
        <div className='container'>
            <h4 className='fs-6 fw-bold'>Projects</h4>
            <div className="row">
                <div className="col-sm-6 mb-4">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">User Form</h5>
                            <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                            <Link to={'/user/projects/user-form'} className="btn btn-primary px-5">Edit</Link>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6  mb-4">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Checkbox Form</h5>
                            <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                            <Link to={'/user/projects/checkbox-form'} className="btn btn-primary px-5">Edit</Link>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6  mb-4">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Radio Button Form</h5>
                            <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                            <Link to={'/user/projects/radio-button-form'} className="btn btn-primary px-5">Edit</Link>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6  mb-4">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Image Upload Form</h5>
                            <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                            <Link to={'/user/projects/image-upload-form'} className="btn btn-primary px-5">Edit</Link>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 mb-4">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Dynamic Form</h5>
                            <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                            <Link to={'/user/projects/dynamic-form'} className="btn btn-primary px-5">Edit</Link>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 mb-4">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Select Input Form</h5>
                            <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                            <Link to={'/user/projects/select-input-form'} className="btn btn-primary px-5">Edit</Link>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 mb-4">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Mix Form</h5>
                            <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                            <Link to={'/user/projects/mix-form'} className="btn btn-primary px-5">Edit</Link>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 mb-4">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Date Form</h5>
                            <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                            <Link to={'/user/projects/date-form'} className="btn btn-primary px-5">Edit</Link>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 mb-4">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Tabs Form</h5>
                            <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                            <Link to={'/user/projects/tabs-form'} className="btn btn-primary px-5">Edit</Link>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 mb-4">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Date Form</h5>
                            <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                            <Link to={'/user/projects/date-form'} className="btn btn-primary px-5">Edit</Link>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 mb-4">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Table Grid</h5>
                            <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                            <Link to={'/user/projects/table-grid'} className="btn btn-primary px-5">Edit</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects;