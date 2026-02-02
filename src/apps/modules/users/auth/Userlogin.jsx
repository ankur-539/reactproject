import React, { useState } from 'react'
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import { useForm } from 'react-hook-form';
function Userlogin() {
    const nav = useNavigate();
    const [showPassword, setShowPassword] = useState(false);

    const HideAndShow = (e) => {
        setShowPassword(e.target.checked)
    }

    const { register, handleSubmit, formState: {errors}} = useForm();

    const loginSubmit = (data)=> {
        console.log(data);
        toast.success("Welcome to dashboard",{autoClose:2000});
        setTimeout(() => {
            nav("/usermanagement/dashboard")
        }, 2000)
    }

    return (
        <form onSubmit={handleSubmit(loginSubmit)}>
            <div className="container-fluid">
                <ToastContainer/>
                <div className="row">
                    <div className="col-md-12 full-wid d-flex justify-content-center align-items-center hightt flex-column bg-image p-5">
                        <h3 className='mb-4 fw-bold c-font-gr'>Sign in your account</h3>
                        <div className='col-md-4 border c-wid p-5 border-0 c-shadow rounded fm back'>
                            <div className="mb-3">
                                <label className="form-label">Email address</label>
                                <input type="email" className="form-control" {...register("emailid",{required:true,pattern:/^[a-zA-Z0-9](\.?[a-zA-Z0-9]){2,29}@gmail\.com$/})}/>
                                {errors.emailid?.type ==="required" && <p className='text-danger'>email is required</p>}
                                {errors.emailid?.type ==="pattern" && <p className='text-warning'>invalid email</p>}
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Password</label>
                                <input type={showPassword ? "text" : "password"} className="form-control" {...register("pass",{required:true,minLength:6})} />
                                {errors.pass?.type === "required" && <p className='text-danger'>pass is required</p>}
                                {errors.pass?.type === "minLength" && <p className='text-warning'>minimum 6 character</p>}
                            </div>
                            <div className="mb-3 form-check d-flex gap-2">
                                <input type="checkbox" className="form-check-input" onChange={HideAndShow} />
                                <label className="form-check-label">Show Password</label>
                                <p className='ms-auto fw-medium text-info cursor '>Forgot Password</p>
                            </div>
                            <button type="submit" className="btn w-100 btn-primary">Login</button>
                            <div className='d-flex justify-content-center mt-4'>
                                <hr className='w-50' />
                                <p className='px-3'>Or</p>
                                <hr className='w-50' />
                            </div>
                            <div className='d-flex justify-content-between gap-3'>
                                <button type="button" className="btn btn-light bg-white border w-50 d-flex justify-content-center align-items-center gap-2"><FcGoogle className='fs-5' />Google</button>
                                <button type="button" className="btn btn-light bg-white border w-50 d-flex justify-content-center align-items-center gap-2"><FaGithub className='fs-5' />GitHub</button>
                            </div>
                        </div>
                        <div className='d-flex gap-2 justify-content-center mt-4'>
                            <p className='opacity-75'>Don't have an account?</p>
                            <Link to="signup" className='fw-medium text-primary cursor text-decoration-none'>Sign up</Link>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    )
}

export default Userlogin