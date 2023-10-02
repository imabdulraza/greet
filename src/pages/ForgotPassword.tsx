import React from 'react';
import { Link } from 'react-router-dom';

const ForgotPassword:React.FC = () => {
    return(
        <div className='container mt-5'>
            <div className="mb-4">
                <p className=''>Don't worry, It's happen</p>
                <h4 className='fs-2 fw-bold text-primary'>Forgot Password</h4>
            </div>
            <form className='w-50'>
                <div className="mb-3">
                    <label className="form-label">Email address</label>
                    <input type="email" className="form-control" placeholder='example@abc.com' id="exampleInputEmail1" aria-describedby="emailHelp" />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="d-grid">
                    <button type="submit" className="btn btn-primary ">Forgot password</button>
                </div>
            </form>
        </div>
    )
}

export default ForgotPassword;