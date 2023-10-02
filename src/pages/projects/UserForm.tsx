import React, { ChangeEvent, useState } from 'react';

import * as Yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { useNavigate } from 'react-router-dom';
import { GoBack } from '../../components/Button/GoBack';

const validationSchema = Yup.object().shape({
    firstName: Yup.string().required('First Name is a required field'),
    lastName: Yup.string().required('Last Name is a required field'),
    email: Yup.string().required('Email is a required field'),
    contact: Yup.string().required('Contact is a required field'),
    birthDate: Yup.string().required('Birth Date is a required field'),
    address: Yup.string().required('Address is a required field'),
    city: Yup.string().required('City is a required field'),
    state: Yup.string().required('State is a required field'),
    postalCode: Yup.string().required('Postal Code is a required field'),
    country: Yup.string().required('Country is a required field'),
}).required();

interface InputProps {
    firstName: string;
    lastName: string;
    email: string;
    contact: string;
    birthDate: string;
    address: string;
    city: string;
    state: string;
    postalCode: string;
    country: string;
};

const initialValue: InputProps = {
    firstName: '',
    lastName: '',
    email: '',
    contact: '',
    birthDate: '',
    address: '',
    city: '',
    state: '',
    postalCode: '',
    country: '',
};

const UserForm: React.FC = () => {
    const navigate = useNavigate();
    const [inputValues, setInputValues] = useState<InputProps>(initialValue);

    const formOptions = { resolver: yupResolver(validationSchema) };
    const { register, handleSubmit, watch, setValue, formState } = useForm<InputProps>(formOptions);
    const { errors } = formState;

    const handleChange = (prop: keyof InputProps) => (event: ChangeEvent<HTMLInputElement>) => {
        setInputValues({ ...inputValues, [prop]: event.target.value });
        setValue(prop, event.target.value, { shouldValidate: true });
    };

    const onSubmit = (formValues: InputProps) => {
        console.log(formValues);
    };

    return (
        <div className='container'>
            <div className='my-4 d-flex align-items-center'>
                <GoBack />
            </div>
            <div className='mb-4'>
                <h2 className='fs-3 fw-bold'>User Information Form</h2>
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
                    <div className="col-sm-12 col-md-6 col-lg-3">
                        <div className="mb-3">
                            <label className="form-label">Last Name</label>
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
                <div className="row justify-content-md-start">
                    <div className="col-sm-12 col-md-12 col-lg-6">
                        <div className="mb-3">
                            <label className="form-label">Email Address</label>
                            <input
                                type="text"
                                {...register("email")}
                                className="form-control"
                                placeholder='johnsmith@gmail.com'
                                id="exampleInputEmail1"
                                aria-describedby="emailHelp"
                                onChange={handleChange('email')}
                            />
                            <div id="emailHelp" className="form-text error">
                                {errors.email?.message}
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
                                {...register("contact")}
                                className="form-control"
                                placeholder='+91 832 332 2345'
                                id="exampleInputEmail1"
                                aria-describedby="emailHelp"
                                onChange={handleChange('contact')}
                            />
                            <div id="emailHelp" className="form-text error">
                                {errors.contact?.message}
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
                                {...register("birthDate")}
                                className="form-control"
                                placeholder='05/12/1997'
                                id="exampleInputEmail1"
                                aria-describedby="emailHelp"
                                onChange={handleChange('birthDate')}
                            />
                            <div id="emailHelp" className="form-text error">
                                {errors.birthDate?.message}
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
                                {...register("address")}
                                className="form-control"
                                placeholder='#122, Park road, Industrial area'
                                id="exampleInputEmail1"
                                aria-describedby="emailHelp"
                                onChange={handleChange('address')}
                            />
                            <div id="emailHelp" className="form-text error">
                                {errors.address?.message}
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
                                {...register("city")}
                                className="form-control"
                                placeholder='Mohali'
                                id="exampleInputEmail1"
                                aria-describedby="emailHelp"
                                onChange={handleChange('city')}
                            />
                            <div id="emailHelp" className="form-text error">
                                {errors.city?.message}
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-3">
                        <div className="mb-3">
                            <label className="form-label">State</label>
                            <input
                                type="text"
                                {...register("state")}
                                className="form-control"
                                placeholder='Punjab'
                                id="exampleInputEmail1"
                                aria-describedby="emailHelp"
                                onChange={handleChange('state')}
                            />
                            <div id="emailHelp" className="form-text error">
                                {errors.state?.message}
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
                                {...register("postalCode")}
                                className="form-control"
                                placeholder='eg. 140301'
                                id="exampleInputEmail1"
                                aria-describedby="emailHelp"
                                onChange={handleChange('postalCode')}
                            />
                            <div id="emailHelp" className="form-text error">
                                {errors.postalCode?.message}
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-3">
                        <div className="mb-3">
                            <label className="form-label">Country</label>
                            <input
                                type="text"
                                {...register("country")}
                                className="form-control"
                                placeholder='India'
                                id="exampleInputEmail1"
                                aria-describedby="emailHelp"
                                onChange={handleChange('country')}
                            />
                            <div id="emailHelp" className="form-text error">
                                {errors.country?.message}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="d-grid gap-2 d-md-block my-3">
                <button
                    className='btn btn-primary'
                    onClick={handleSubmit(onSubmit)}
                >
                    Save changes
                </button>
            </div>
        </div>
    )
};

export default UserForm;