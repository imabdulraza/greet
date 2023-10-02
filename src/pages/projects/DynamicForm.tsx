import { faClose, faCross, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect } from 'react';
import { useFieldArray, useForm } from 'react-hook-form';
import { GoBack } from '../../components/Button/GoBack';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import _ from 'lodash'

const validationSchema = Yup.object().shape({
    test: Yup.array().of(
        Yup.object().shape({
            firstName: Yup.string()
                .required('firstName is required'),
            lastName: Yup.string()
                .required('lastName is required'),
            email: Yup.string()
                .email('Email is Invalid')
                .required('Email is required')
        })
    )
});

interface InputProps {
    firstName: string;
    lastName: string;
    email: string;
};



const DynamicForm: React.FC = () => {

    const defaultInputValues: InputProps = {firstName: '', lastName: '', email: ''}

    const formOptions = { 
        resolver: yupResolver(validationSchema),
        defaultValues: { test: [defaultInputValues] }
    };

    const { register, control, handleSubmit, reset, formState } = useForm(formOptions);
    const { errors } = formState;

    const { fields, append, prepend, remove, swap, move, insert } = useFieldArray({
        control,
        name: "test"
    });

    const onSubmit = (data: any) => {
        debugger
        console.log(data.test)
    };

    return (
        <div className='container'>
            <div className='my-4 d-flex align-items-center'>
                <GoBack />
            </div>
            <div className='mb-4'>
                <h2 className='fs-3 fw-bold'>Dynamic Form</h2>
                <p className='.f-size-14 text-secondary'>This information will be saved to your profile. You will be able to update anytime.</p>
                <h6 className='fw-bold f-size-14'>User ID: VX9105DC</h6>
            </div>

            {fields.map((item, index: number) => {
                return (
                    <div key={item.id} className="container p-0">
                        {index !== 0 &&
                            <div className="row justify-content-md-start">
                                <div className="col-sm-12 col-md-6 col-lg-6">
                                    <div className="text-end mb-3">
                                        <FontAwesomeIcon onClick={() => remove(index)} icon={faClose} />
                                    </div>
                                </div>
                            </div>}
                        <div className="row justify-content-md-start">
                            <div className="col-sm-12 col-md-6 col-lg-3">
                                <div className="mb-3">
                                    <input
                                        type="text"
                                        {...register(`test.${index}.firstName`)}
                                        name={`test[${index}].firstName`}
                                        // defaultValue={`${item.firstName}`}
                                        className="form-control"
                                        placeholder='John'
                                    />
                                    <div id="emailHelp" className="form-text error">
                                        {_.get(errors.test, [index, 'firstName', 'message'], null)}
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-12 col-md-6 col-lg-3">
                                <div className="mb-3">
                                    <input
                                        type="text"
                                        {...register(`test.${index}.lastName`)}
                                        name={`test[${index}].lastName`}
                                        // defaultValue={`${item.lastName}`}
                                        className="form-control"
                                        placeholder='Smith'
                                    />
                                    <div id="emailHelp" className="form-text error">
                                    {_.get(errors.test, [index, 'lastName', 'message'], null)}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row justify-content-md-start">
                            <div className="col-sm-12 col-md-6 col-lg-6">
                                <div className="mb-3">
                                    <input
                                        type="text"
                                        {...register(`test.${index}.email`)}
                                        name={`test[${index}].email`}
                                        // defaultValue={`${item.email}`}
                                        className="form-control"
                                        placeholder='abc@company.com'
                                    />
                                    <div id="emailHelp" className="form-text error">
                                    {_.get(errors.test, [index, 'email', 'message'], null)}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            })}
            <button
                onClick={() => {
                    append({ firstName: '', lastName: '', email: '' });
                }}
                className='btn btn-outline-secondary'
            >
                <FontAwesomeIcon icon={faPlus} /> Add other
            </button>
            <div className="d-grid gap-2 d-md-block my-3">
                <button onClick={handleSubmit(onSubmit)} className='btn btn-primary'>Save changes</button>
            </div>
        </div>
    )
}

export default DynamicForm;