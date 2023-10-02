import React from 'react';
import { Link } from 'react-router-dom';

const ResetPassword:React.FC = () => {
    return(
        <div className='container mt-5'>
            <div className="mb-4">
                <p className=''>Enter opt received on email and reset your password</p>
                <h4 className='fs-2 fw-bold text-primary'>Reset Password</h4>
            </div>
            <form className='w-50'>
                <div className="mb-3">
                    <label className="form-label">Email address</label>
                    <input type="email" className="form-control" placeholder='example@abc.com' id="exampleInputEmail1" aria-describedby="emailHelp" />
                    <div id="emailHelp" className="form-text error">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label className="form-label">One time password</label>
                    <input type="text" className="form-control" placeholder='****' id="exampleInputOtp" aria-describedby="emailHelp" />
                    {/* <div id="emailHelp" className="form-text error">We'll never share your email with anyone else.</div> */}
                </div>
                <div className="mb-3">
                    <label className="form-label">Password </label>
                    <input type="password" className="form-control" placeholder='********' id="exampleInputPassword1" />
                </div>
                <div className="mb-5">
                    <label className="form-label">Confirm password </label>
                    <input type="password" className="form-control" placeholder='********' id="exampleInputPassword1" />
                </div>
                <div className="d-grid">
                    <button type="submit" className="btn btn-primary ">Reset password</button>
                </div>
            </form>
        </div>
    )
}

export default ResetPassword;