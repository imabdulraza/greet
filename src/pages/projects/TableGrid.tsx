import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { GoBack } from '../../components/Button/GoBack';
import { faPenToSquare, faTrashAlt } from '@fortawesome/free-solid-svg-icons';

const TableGrid: React.FC = () => {
    return (
        <div className='container'>
            <div className='my-4 d-flex align-items-center'>
                <GoBack />
            </div>
            <div className='mb-4'>
                <h2 className='fs-3 fw-bold'>Table Grid</h2>
                <p className='.f-size-14 text-secondary'>This information will be saved to your profile. You will be able to update anytime.</p>
                <h6 className='fw-bold f-size-14'>User ID: VX9105DC</h6>
            </div>
            <div className="container p-0">
                <div className="card">
                    <div className="card-body">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">First</th>
                                    <th scope="col">Last</th>
                                    <th scope="col">Handle</th>
                                    <th scope="col">Status</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>Mark</td>
                                    <td>Otto</td>
                                    <td>@mdo</td>
                                    <td className='success'>Active</td>
                                    <td>
                                        <div className='d-flex gap-4 align-items-center'>
                                            <FontAwesomeIcon className='text-dark pointer' icon={faPenToSquare} />
                                            <FontAwesomeIcon className='error pointer' icon={faTrashAlt} />
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">2</th>
                                    <td>Jacob</td>
                                    <td>Thornton</td>
                                    <td>@fat</td>
                                    <td className='warning'>Pending</td>
                                    <td>
                                        <div className='d-flex gap-4 align-items-center'>
                                            <FontAwesomeIcon className='text-dark pointer' icon={faPenToSquare} />
                                            <FontAwesomeIcon className='error pointer' icon={faTrashAlt} />
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">3</th>
                                    <td >Larry the Bird</td>
                                    <td>@twitter</td>
                                    <td>@twitter</td>
                                    <td className='text-secondary'>Disabled</td>
                                    <td>
                                        <div className='d-flex gap-4 align-items-center'>
                                            <FontAwesomeIcon className='text-dark pointer' icon={faPenToSquare} />
                                            <FontAwesomeIcon className='error pointer' icon={faTrashAlt} />
                                        </div>

                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">3</th>
                                    <td >Larry the Bird</td>
                                    <td>@twitter</td>
                                    <td>@twitter</td>
                                    <td className='error'>Rejected</td>
                                    <td>
                                        <div className='d-flex gap-4 align-items-center'>
                                            <FontAwesomeIcon className='text-dark pointer' icon={faPenToSquare} />
                                            <FontAwesomeIcon className='error pointer' icon={faTrashAlt} />
                                        </div>

                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>Mark</td>
                                    <td>Otto</td>
                                    <td>@mdo</td>
                                    <td className='success'>Active</td>
                                    <td>
                                        <div className='d-flex gap-4 align-items-center'>
                                            <FontAwesomeIcon className='text-dark pointer' icon={faPenToSquare} />
                                            <FontAwesomeIcon className='error pointer' icon={faTrashAlt} />
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">2</th>
                                    <td>Jacob</td>
                                    <td>Thornton</td>
                                    <td>@fat</td>
                                    <td className='warning'>Pending</td>
                                    <td>
                                        <div className='d-flex gap-4 align-items-center'>
                                            <FontAwesomeIcon className='text-dark pointer' icon={faPenToSquare} />
                                            <FontAwesomeIcon className='error pointer' icon={faTrashAlt} />
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">3</th>
                                    <td >Larry the Bird</td>
                                    <td>@twitter</td>
                                    <td>@twitter</td>
                                    <td className='text-secondary'>Disabled</td>
                                    <td>
                                        <div className='d-flex gap-4 align-items-center'>
                                            <FontAwesomeIcon className='text-dark pointer' icon={faPenToSquare} />
                                            <FontAwesomeIcon className='error pointer' icon={faTrashAlt} />
                                        </div>

                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">3</th>
                                    <td >Larry the Bird</td>
                                    <td>@twitter</td>
                                    <td>@twitter</td>
                                    <td className='error'>Rejected</td>
                                    <td>
                                        <div className='d-flex gap-4 align-items-center'>
                                            <FontAwesomeIcon className='text-dark pointer' icon={faPenToSquare} />
                                            <FontAwesomeIcon className='error pointer' icon={faTrashAlt} />
                                        </div>

                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TableGrid;