import React, { ChangeEvent, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Roles } from '../config/Roles';

const validationSchema = Yup.object().shape({
  firstName: Yup.string().required('First name is a required field'),
  lastName: Yup.string().required('Last name is a required field'),
  email: Yup.string().required('Email is a required field'),
  phoneNumber: Yup.string().required('Phone number is a required field'),
  password: Yup.string().required('Password is a required field'),
  confirmPassword: Yup.string().required('Confirm password is a required field').oneOf([Yup.ref('password'), null], 'Password must match'),
}).required();

interface InputProps {
    firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  password: string;
  confirmPassword: string;
  role: string;
}

const Register: React.FC = () => {
    const navigate = useNavigate();

    const { register, handleSubmit, watch, setValue, formState: { errors } } = useForm<InputProps>({
        resolver: yupResolver(validationSchema),
        mode: 'onChange'
    });

    const [inputValues, setInputValues] = useState<InputProps>({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        password: '',
        confirmPassword: '',
        role: Roles.USER,
    });

    const handleChange = (prop: keyof InputProps) => (event: ChangeEvent<HTMLInputElement>) => {
        setValue(prop, event.target.value, { shouldValidate: true });
        setInputValues({ ...inputValues, [prop]: event.target.value });
    };

    const onSubmit = () => {
        console.log(inputValues);
        navigate('/login')
    };


    return (
        <div className='container mt-4'>
            <div className="mb-4">
                <p className=''>Hi there,</p>
                <h4 className='fs-2 fw-bold text-primary'>Let's Connect...</h4>
            </div>
            {/* <div className="alert alert-danger w-50" role="alert">
                A simple danger alert—check it out!
            </div> */}
            <form onSubmit={handleSubmit(onSubmit)} className='w-50'>
                <div className='container'>
                    <div className='row'>
                        <div className='col'>
                            <div className="mb-3">
                                <label className="form-label">First name</label>
                                <input 
                                    type="text"
                                    {...register("firstName")}
                                    className="form-control" 
                                    placeholder='John' 
                                    id="exampleInputEmail1" 
                                    aria-describedby="emailHelp"
                                    onChange={handleChange('firstName')}
                                />
                                <div id="emailHelp" className="form-text error">
                                    {errors.firstName?.message}
                                </div>
                            </div>
                        </div>
                        <div className='col'>
                            <div className="mb-3">
                                <label className="form-label">Last name</label>
                                <input 
                                    type="text" 
                                    {...register("lastName")}
                                    className="form-control" 
                                    placeholder='Smith' 
                                    id="exampleInputEmail1" 
                                    aria-describedby="emailHelp"
                                    onChange={handleChange('lastName')}
                                />
                                <div id="emailHelp" className="form-text error">
                                    {errors.lastName?.message}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-sm-12'>
                            <div className="mb-3">
                                <label className="form-label">User name</label>
                                <input 
                                    type="email"
                                    {...register("email")} 
                                    className="form-control" 
                                    placeholder='@myusername' 
                                    id="exampleInputEmail1" 
                                    aria-describedby="emailHelp"
                                    onChange={handleChange('email')} 
                                />
                                <div id="emailHelp" className={errors.email?.message ? "form-text error" : "form-text"}>
                                    {errors.email?.message 
                                        ? errors.email?.message
                                        : `We'll never share your email with anyone else.`}
                                </div>
                            </div>
                        </div>
                        <div className='col-sm-12'>
                            <div className="mb-3">
                                <label className="form-label">Email address</label>
                                <input 
                                    type="email"
                                    {...register("email")} 
                                    className="form-control" 
                                    placeholder='example@abc.com' 
                                    id="exampleInputEmail1" 
                                    aria-describedby="emailHelp"
                                    onChange={handleChange('email')} 
                                />
                                <div id="emailHelp" className={errors.email?.message ? "form-text error" : "form-text"}>
                                    {errors.email?.message 
                                        ? errors.email?.message
                                        : `We'll never share your email with anyone else.`}
                                </div>
                            </div>
                        </div>
                        <div className='col-sm-12'>
                            <div className="mb-3">
                                <label className="form-label">Phone number</label>
                                <input 
                                    type="text" 
                                    {...register("phoneNumber")}
                                    className="form-control" 
                                    placeholder='+91 997 733 2323' 
                                    id="exampleInputEmail1" 
                                    aria-describedby="emailHelp" 
                                    onChange={handleChange('phoneNumber')}
                                />
                                <div id="emailHelp" className="form-text error">
                                    {errors.phoneNumber?.message}
                                </div>
                            </div>
                        </div>
                        <div className='col-sm-12'>
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
                                <div id="passwordHelpBlock" className={errors.password?.message ? "form-text error": "form-text"}>
                                    Your password must be 8-20 characters long, contain letters, numbers, special characters, and must not contain spaces, or emoji.
                                </div>
                            </div>
                        </div>
                        <div className='col-sm-12'>
                            <div className="mb-3">
                                <label className="form-label">Confirm password </label>
                                <input 
                                    type="password"
                                    {...register("confirmPassword")} 
                                    className="form-control" 
                                    placeholder='********' 
                                    id="exampleInputPassword1"
                                    onChange={handleChange('confirmPassword')}
                                />
                                <div id="passwordHelpBlock" className="form-text error">
                                    {errors.confirmPassword?.message}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="d-grid my-4">
                    <button type="submit" className="btn btn-primary ">Register</button>
                </div>
            </form>
        </div>
    )
}

export default Register;