import React, { ChangeEvent, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';

const validationSchema = Yup.object().shape({
  role: Yup.string().required('Email is a required field'),
  email: Yup.string().required('Email is a required field'),
  password: Yup.string().required('Password is a required field'),
}).required();

interface InputProps {
    email: string;
    password: string;
    role: string;
}

const Login: React.FC = () => {
    const navigate = useNavigate();
    const { register, handleSubmit, watch, setValue, formState: { errors } } = useForm<InputProps>({
        resolver: yupResolver(validationSchema),
    });

    const [inputValues, setInputValues] = useState<InputProps>({
        email: '',
        password: '',
        role: 'ADMIN'
    });

    const handleChange = (prop: keyof InputProps) => (event: ChangeEvent<HTMLInputElement>) => {
        setInputValues({ ...inputValues, [prop]: event.target.value });
        setValue(prop, event.target.value, { shouldValidate: true })
    };

    const onSubmit = () => {
        const userData = { email: inputValues.email, role: inputValues.role };
        const userInfo = JSON.stringify(userData);
        localStorage.setItem('userInfo', userInfo);
        navigate('/user/dashboard');
    };


    return (
        <div className='container mt-4'>
            <div className="mb-4">
                <p className=''>Nice to see you again</p>
                <h4 className='fs-2 fw-bold text-primary'>Welcome back!</h4>
            </div>
            {/* <div className="alert alert-danger w-50" role="alert">
                <FontAwesomeIcon icon={faInfoCircle} /> Email or Password is incorrect!
            </div> */}
            <form onSubmit={handleSubmit(onSubmit)} className='w-50'>
            <div className="mb-3">
                    <label className="form-label">Role</label>
                    <input 
                        type="text" 
                        {...register("role")}
                        className="form-control" 
                        placeholder='example@abc.com' 
                        id="exampleInputEmail1" 
                        aria-describedby="emailHelp"
                        onChange={handleChange('role')}
                    />
                    <div id="emailHelp" className="form-text error">
                        {errors.role?.message}
                    </div>
                </div>
                <div className="mb-3">
                    <label className="form-label">Email address</label>
                    <input 
                        type="text" 
                        {...register("email")}
                        className="form-control" 
                        placeholder='example@abc.com' 
                        id="exampleInputEmail1" 
                        aria-describedby="emailHelp"
                        onChange={handleChange('email')}
                    />
                    <div id="emailHelp" className="form-text error">
                        {errors.email?.message}
                    </div>
                </div>
                <div className="mb-3">
                    <label className="form-label">Password </label>
                    <input 
                        type="password"
                        {...register("password")}
                        className="form-control" 
                        placeholder='********' 
                        id="exampleInputPassword1"
                        onChange={handleChange('password')}
                    />
                    <div id="emailHelp" className="form-text error">
                        {errors.password?.message}
                    </div>
                </div>
                <div className="mb-3">
                    <Link to={'/forgot-password'} className='link'>Forgot password?</Link>
                </div>
                <div className="d-grid">
                    <button 
                        type="submit" 
                        className="btn btn-primary" 
                    >
                        Login
                    </button>
                </div>
                <div className="d-flex align-items-center justify-content-center my-4">
                    <span>Don't have an account? <Link className='link' to={'/register'}> Register here</Link></span>
                </div>
            </form>
        </div>
    )
}

export default Login;
