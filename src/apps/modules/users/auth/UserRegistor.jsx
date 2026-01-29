import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';

export default function UserRegistor() {

    const [showPassword, setShowPassword] = useState(false);

    const HideAndShow = (e) => {
        setShowPassword(e.target.checked)
    }

    const { register, handleSubmit, formState: { errors } } = useForm()

    const formsubmit = (data) => {
        console.log(data);
    }
    return (
        <form onSubmit={handleSubmit(formsubmit)}>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12 d-flex justify-content-center align-items-center hightt flex-column bg-image">
                        <h2 className='mb-4 fw-bold c-font-gr'>Create an account</h2>
                        <div className='col-md-6 border back p-5 border-0 c-shadow rounded fm'>
                            <div className='d-flex justify-content-between gap-3 mb-3'>
                                <div className="w-50">
                                    <label className="form-label">Username</label>
                                    <input type="text" className="form-control" {...register("username", { required: true, minLength: 5, maxLength: 15 })} />
                                    {errors.username?.type === "required" && <p className='text-danger m-0'>username is required</p>}
                                    {errors.username?.type === "minLength" && <p className='text-info m-0'>minimum 5 charectors</p>}
                                    {errors.username?.type === "maxLength" && <p className='text-info m-0'>maximum 15 charectors</p>}
                                </div>
                                <div className="w-50">
                                    <label className="form-label text-light">Dob</label>
                                    <input type="date" className="form-control" {...register("dob", { required: true })} />
                                    {errors.dob && <p className='text-danger m-0'>dob is required</p>}
                                </div>
                            </div>
                            <div className='d-flex justify-content-between gap-3 mb-3'>
                                <div className="w-50">
                                    <label className="form-label">Email address</label>
                                    <input type="email" className="form-control" {...register("emailid", { required: true, pattern: /^(?!\.)(?!.*\.\.)[a-zA-Z0-9.]{5,15}(?<!\.)@gmail\.com$/ })} />
                                    {errors.emailid?.type === "required" && <p className='text-danger m-0'>email is required</p>}
                                    {errors.emailid?.type === "pattern" && <p className='text-danger m-0'>email valid gmail</p>}
                                </div>
                                <div className="w-50">
                                    <label className="form-label text-light">Phone no</label>
                                    <input type="tel" className="form-control" {...register("userphone", { required: true, minLength: 10, maxLength: 10 })} />
                                    {errors.userphone?.type === "required" && <p className='text-danger m-0'>phone no is required</p>}
                                    {errors.userphone?.type === "minLength" && <p className='text-info m-0'>minimum 10 digit required</p>}
                                    {errors.userphone?.type === "maxLength" && <p className='text-info m-0'>maximum 10 digit required</p>}
                                </div>
                            </div>
                            <div className='d-flex justify-content-between gap-3 mb-3'>
                                <div className="w-50">
                                    <label className="form-label">Password</label>
                                    <input type={showPassword ? "text" : "password"} className="form-control" {...register("pass", { required: true, minLength: 8, maxLength: 14, pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/ })} />
                                    {errors.pass?.type === "required" && <p className='text-danger'>password is required</p>}
                                    {errors.pass?.type === "minLength" && <p className='text-info'>minimum 8 charectors required</p>}
                                    {errors.pass?.type === "maxLength" && <p className='text-info'>maximum 14 charectors required</p>}
                                    {errors.pass?.type === "pattern" && <p className='text-warning'>pass:"At least 1 lowercase, 1 uppercase, 1 number and 1 specil character required</p>}
                                </div>
                                <div className="w-50">
                                    <label className="form-label text-light">Profile pic</label>
                                    <input type="url" className="form-control" placeholder='Url only' {...register("profileurl", { required: true })} />
                                    {errors.profileurl && <p className='text-danger m-0'>img url is required</p>}
                                </div>
                            </div>
                            <div className="mb-3 form-check d-flex gap-2">
                                <input type="checkbox" className="form-check-input" onChange={HideAndShow} />
                                <label className="form-check-label">Show Password</label>
                            </div>

                            <button type="submit" className="btn w-100 btn-success mt-3">Sign up</button>
                        </div>


                        <div className='d-flex gap-2 justify-content-center mt-4'>
                            <p className='opacity-75'>Already have an account?</p>
                            <Link to="/usermanagement" className='fw-medium text-primary cursor text-decoration-none'>Login</Link>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    )
}
