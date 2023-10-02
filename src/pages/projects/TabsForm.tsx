import { faCalendarPlus, faCircleInfo, faInfo, faInfoCircle, faPenToSquare, faPlugCirclePlus, faPlus, faPlusCircle, faTrash, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { GoBack } from '../../components/Button/GoBack';
import OffCanvas from '../../components/OffCanvas';

const TabsForm: React.FC = () => {

    const [tabState, setTabState] = useState('active');

    return (
        <div className='container'>
            <div className='my-4 d-flex align-items-center'>
                <GoBack />
            </div>
            <div className='d-flex justify-content-between align-items-end mb-4'>
                <div>
                    <h2 className='fs-3 fw-bold'>Tabs Form</h2>
                    <p className='.f-size-14 text-secondary'>This information will be saved to your profile. You will be able to update anytime.</p>
                    <h6 className='fw-bold f-size-14'>User ID: VX9105DC</h6>
                </div>
                <div>
                    <button className='btn btn-outline-dark' data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
                        <FontAwesomeIcon className='success pointer' icon={faPlus} /> Add User
                    </button>
                    <OffCanvas children={<>Add user form</>} />
                </div>
            </div>
            <div className="container p-0">
                <div className="row">
                    <div className="col-sm-12 col-md-12 col-lg-12">
                        <div className="mb-3">
                            <ul className="nav nav-tabs">
                                <li className="nav-item">
                                    <a className={tabState === 'active' ? "nav-link active" : "nav-link"} aria-current="page" onClick={() => setTabState('active')}>Active</a>
                                </li>
                                <li className="nav-item">
                                    <a className={tabState === 'pending' ? "nav-link active" : "nav-link"} onClick={() => setTabState('pending')}>Pending</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                {tabState === 'active' &&
                    <div className="row">
                        <div className="col-sm-12 col-md-3 col-lg-3">
                            <div className="mb-3">
                                <div className="card">
                                    <div className="card-body">
                                        <div className="d-flex justify-content-between align-items-center">
                                            <div className='d-flex gap-2 align-items-center'>
                                                <FontAwesomeIcon icon={faCircleInfo} />
                                                <span className="f-size-14 warning">Awaiting approval</span>
                                            </div>

                                            <div className='d-flex gap-4 align-items-center'>
                                                <FontAwesomeIcon className='text-dark pointer' icon={faPenToSquare} />
                                                <FontAwesomeIcon className='error pointer' icon={faTrashAlt} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-3 col-lg-3">
                            <div className="mb-3">
                                <div className="card">
                                    <div className="card-body">
                                        <div className="d-flex justify-content-between align-items-center">
                                            <div className='d-flex gap-2 align-items-center'>
                                                <FontAwesomeIcon icon={faCircleInfo} />
                                                <span className="f-size-14 success">Approved</span>
                                            </div>

                                            <div className='d-flex gap-4 align-items-center'>
                                                <FontAwesomeIcon className='text-dark pointer' icon={faPenToSquare} />
                                                <FontAwesomeIcon className='error pointer' icon={faTrashAlt} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-3 col-lg-3">
                            <div className="mb-3">
                                <div className="card">
                                    <div className="card-body">
                                        <div className="d-flex justify-content-between align-items-center">
                                            <div className='d-flex gap-2 align-items-center'>
                                                <FontAwesomeIcon icon={faCircleInfo} />
                                                <span className="f-size-14 error">Rejected</span>
                                            </div>

                                            <div className='d-flex gap-4 align-items-center'>
                                                <FontAwesomeIcon className='text-dark pointer' icon={faPenToSquare} />
                                                <FontAwesomeIcon className='error pointer' icon={faTrashAlt} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-3 col-lg-3">
                            <div className="mb-3">
                                <div className="card">
                                    <div className="card-body">
                                        <FontAwesomeIcon className='success pointer' icon={faPlus} />


                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-3 col-lg-3">
                            <div className="mb-3">
                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title">Card title</h5>
                                        <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        <a href="#" className="card-link">Card link</a>
                                        <a href="#" className="card-link">Another link</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-3 col-lg-3">
                            <div className="mb-3">
                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title">Card title</h5>
                                        <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        <a href="#" className="card-link">Card link</a>
                                        <a href="#" className="card-link">Another link</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>}
                {tabState === 'pending' &&
                    <div className="row">
                        <div className="col-sm-12 col-md-3 col-lg-3">
                            <div className="mb-3">
                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title">Pending Card</h5>
                                        <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        <a href="#" className="card-link">Card link</a>
                                        <a href="#" className="card-link">Another link</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-3 col-lg-3">
                            <div className="mb-3">
                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title">Card title</h5>
                                        <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        <a href="#" className="card-link">Card link</a>
                                        <a href="#" className="card-link">Another link</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-3 col-lg-3">
                            <div className="mb-3">
                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title">Card title</h5>
                                        <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        <a href="#" className="card-link">Card link</a>
                                        <a href="#" className="card-link">Another link</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-3 col-lg-3">
                            <div className="mb-3">
                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title">Card title</h5>
                                        <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        <a href="#" className="card-link">Card link</a>
                                        <a href="#" className="card-link">Another link</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-3 col-lg-3">
                            <div className="mb-3">
                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title">Card title</h5>
                                        <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        <a href="#" className="card-link">Card link</a>
                                        <a href="#" className="card-link">Another link</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>}
            </div>
        </div>
    )
}

export default TabsForm;