import React from 'react';
import { GoBack } from '../../components/Button/GoBack';

const MixForm:React.FC = () => {
    return(
        <div className='container'>
            <div className='my-4 d-flex align-items-center'>
                <GoBack />
            </div>
            <div className='mb-4'>
                <h2 className='fs-3 fw-bold'>Mix Form</h2>
                <p className='.f-size-14 text-secondary'>This information will be saved to your profile. You will be able to update anytime.</p>
                <h6 className='fw-bold f-size-14'>User ID: VX9105DC</h6>
            </div>
            <div className="container p-0">
                <div className="row justify-content-md-start">
                    <div className="col-sm-12 col-md-6 col-lg-3">
                        <div className="mb-3">
                            <label className="form-label">First Name</label>
                            <input
                                type="text"
                                // {...register("firstName")}
                                className="form-control"
                                placeholder='John'
                                id="exampleInputEmail1"
                                aria-describedby="emailHelp"
                            // onChange={handleChange('firstName')}
                            />
                            <div id="emailHelp" className="form-text error">
                                {/* {errors.firstName?.message} */}
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-3">
                        <div className="mb-3">
                            <label className="form-label">Last Name</label>
                            <input
                                type="text"
                                // {...register("firstName")}
                                className="form-control"
                                placeholder='Smith'
                                id="exampleInputEmail1"
                                aria-describedby="emailHelp"
                            // onChange={handleChange('firstName')}
                            />
                            <div id="emailHelp" className="form-text error">
                                {/* {errors.firstName?.message} */}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-md-start">
                    <div className="col-sm-12 col-md-12 col-lg-6">
                        <div className="mb-3">
                            <label className="form-label">Email Address</label>
                            <input
                                type="text"
                                // {...register("firstName")}
                                className="form-control"
                                placeholder='johnsmith@gmail.com'
                                id="exampleInputEmail1"
                                aria-describedby="emailHelp"
                            // onChange={handleChange('firstName')}
                            />
                            <div id="emailHelp" className="form-text error">
                                {/* {errors.firstName?.message} */}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-md-start">
                    <div className="col-sm-12 col-md-12 col-lg-6">
                        <div className="mb-3">
                            <label className="form-label">Contact</label>
                            <input
                                type="text"
                                // {...register("firstName")}
                                className="form-control"
                                placeholder='+91 832 332 2345'
                                id="exampleInputEmail1"
                                aria-describedby="emailHelp"
                            // onChange={handleChange('firstName')}
                            />
                            <div id="emailHelp" className="form-text error">
                                {/* {errors.firstName?.message} */}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-md-start">
                    <div className="col-sm-12 col-md-12 col-lg-6">
                        <div className="mb-3">
                            <label className="form-label">Date of Birth</label>
                            <input
                                type="date"
                                // {...register("firstName")}
                                className="form-control"
                                placeholder='05/12/1997'
                                id="exampleInputEmail1"
                                aria-describedby="emailHelp"
                            // onChange={handleChange('firstName')}
                            />
                            <div id="emailHelp" className="form-text error">
                                {/* {errors.firstName?.message} */}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-md-start">
                    <div className="col-sm-12 col-md-6 col-lg-6">
                        <div className="mb-3">
                            <label className="form-label">Address</label>
                            <input
                                type="text"
                                // {...register("firstName")}
                                className="form-control"
                                placeholder='#122, Park road, Industrial area'
                                id="exampleInputEmail1"
                                aria-describedby="emailHelp"
                            // onChange={handleChange('firstName')}
                            />
                            <div id="emailHelp" className="form-text error">
                                {/* {errors.firstName?.message} */}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-md-start">
                    <div className="col-sm-12 col-md-6 col-lg-3">
                        <div className="mb-3">
                            <label className="form-label">City</label>
                            <input
                                type="text"
                                // {...register("firstName")}
                                className="form-control"
                                placeholder='Mohali'
                                id="exampleInputEmail1"
                                aria-describedby="emailHelp"
                            // onChange={handleChange('firstName')}
                            />
                            <div id="emailHelp" className="form-text error">
                                {/* {errors.firstName?.message} */}
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-3">
                        <div className="mb-3">
                            <label className="form-label">State</label>
                            <input
                                type="text"
                                // {...register("firstName")}
                                className="form-control"
                                placeholder='Punjab'
                                id="exampleInputEmail1"
                                aria-describedby="emailHelp"
                            // onChange={handleChange('firstName')}
                            />
                            <div id="emailHelp" className="form-text error">
                                {/* {errors.firstName?.message} */}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-md-start">
                    <div className="col-sm-12 col-md-6 col-lg-3">
                        <div className="mb-3">
                            <label className="form-label">Postal Code</label>
                            <input
                                type="text"
                                // {...register("firstName")}
                                className="form-control"
                                placeholder='eg. 140301'
                                id="exampleInputEmail1"
                                aria-describedby="emailHelp"
                            // onChange={handleChange('firstName')}
                            />
                            <div id="emailHelp" className="form-text error">
                                {/* {errors.firstName?.message} */}
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-3">
                        <div className="mb-3">
                            <label className="form-label">Country</label>
                            <input
                                type="text"
                                // {...register("firstName")}
                                className="form-control"
                                placeholder='India'
                                id="exampleInputEmail1"
                                aria-describedby="emailHelp"
                            // onChange={handleChange('firstName')}
                            />
                            <div id="emailHelp" className="form-text error">
                                {/* {errors.firstName?.message} */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="d-grid gap-2 d-md-block my-3">
                <button className='btn btn-primary'>Save changes</button>
            </div>
        </div>
    )
}

export default MixForm;