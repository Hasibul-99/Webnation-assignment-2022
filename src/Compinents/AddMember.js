import React from 'react';
import { useForm } from 'react-hook-form';

export default function AddMember(props) {
    const {setIsModalOpen, handelModalSubmit} = props;
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();


    return (
        <div className="card add-user" style={{ width: '25rem' }}>
            <div className="card-header">
                Add New Member
            </div>
            <div className="card-body">
                <form onSubmit={handleSubmit(data => handelModalSubmit({...data, ...{id: new Date().getTime() }}))}>
                    <div className="mb-3">
                        <label htmlFor="inputName" className="form-label">Name <span className='text-danger'>*</span></label>
                        <input {...register('name', { required: 'Name is required',
                        pattern: {
                            value: /^[^\s]+(?:$|.*[^\s]+$)/,
                            message: "Name cant start or end with white spacing"
                            },
                        })} 
                            className="form-control" id="inputName" placeholder='Name'/>
                        {errors.name && <p className='text-danger'>{errors.name.message}</p>}
                    </div>

                    <div className="mb-3">
                        <label htmlFor="inputEmail" className="form-label">E-mail <span className='text-danger'>*</span></label>
                        <input placeholder="Email"
                            {...register('email', {
                                required: 'Email is required',
                                pattern: {
                                    value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                    message: 'Please enter a valid email',
                                },
                            })}
                            type="text"
                            id="inputEmail"
                            className="form-control" />
                        {errors.email && <p className='text-danger'>{errors.email.message}</p>}
                    </div>

                    <div className="mb-3">
                        <label htmlFor="inputPhone" className="form-label">Phone <span className='text-danger'>*</span></label>
                        <input placeholder="Phone"
                            {...register('phone', {
                                required: 'Phone is required',
                                pattern: {
                                    value: /^(?:\+?88)?01[15-9]\d{8}$/,
                                    message: 'Please enter a valid Phone',
                                },
                            })}
                            type="text"
                            id="inputPhone"
                            className="form-control" />
                        {errors.phone && <p className='text-danger'>{errors.phone.message}</p>}
                    </div>

                    <hr/>
                    <div className='submit-section'>
                        <button type="button" className="btn btn-light btn-cancel"
                            onClick={() => {setIsModalOpen(false)}}>Cancel</button>  
                        <button type="submit" className="btn btn-outline-dark px-4">Add</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
