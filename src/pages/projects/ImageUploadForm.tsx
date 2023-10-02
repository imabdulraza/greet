import React from 'react';
import { GoBack } from '../../components/Button/GoBack';

const ImageUploadForm:React.FC = () => {
    return(
        <div className='container'>
            <div className='my-4 d-flex align-items-center'>
                <GoBack />
            </div>
            <div className='mb-4'>
                <h2 className='fs-3 fw-bold'>Image Upload Form</h2>
                <p className='.f-size-14 text-secondary'>This information will be saved to your profile. You will be able to update anytime.</p>
                <h6 className='fw-bold f-size-14'>User ID: VX9105DC</h6>
            </div>
            <div className="container p-0">
                <div className="row justify-content-md-start">
                    <div className="col-sm-12 col-md-12 col-lg-6">
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
                    <div className="row justify-content-md-start">
                    <div className="col-sm-12 col-md-12 col-lg-6">
                        <div className="mb-3">
                            <label className="form-label">Upload Image</label>
                            <input type="file" className="form-control" id="inputGroupFile01" />
                            {/* <div id="emailHelp" className="form-text error">
                                {errors.email?.message}
                            </div> */}
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

export default ImageUploadForm;