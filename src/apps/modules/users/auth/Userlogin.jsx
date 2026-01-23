import React from 'react'
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { Link } from 'react-router-dom';
function Userlogin() {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-12 full-wid d-flex justify-content-center align-items-center hightt flex-column bg-image">
                    <h3 className='mb-4 fw-bold c-font-gr'>Sign in your account</h3>
                    <div className='col-md-4 border c-wid p-5 border-0 c-shadow rounded fm back'>
                            <div class="mb-3">
                                <label class="form-label">Email address</label>
                                <input type="email" class="form-control" />
                            </div>
                            <div class="mb-3">
                                <label class="form-label">Password</label>
                                <input type="password" class="form-control" />
                            </div>
                            <div class="mb-3 form-check d-flex gap-2">
                                <input type="checkbox" class="form-check-input" />
                                    <label class="form-check-label" >Remember me</label>
                                    <p className='ms-auto fw-medium text-info cursor '>Forgot Password</p>
                            </div>
                            <button type="submit" class="btn w-100 btn-primary">Login</button>
                        <div className='d-flex justify-content-center mt-4'>
                            <hr className='w-50'/>
                            <p className='px-3'>Or</p>
                            <hr className='w-50'/>
                        </div>
                        <div className='d-flex justify-content-between gap-3'>
                            <button type="button" class="btn btn-light bg-white border w-50 d-flex justify-content-center align-items-center gap-2"><FcGoogle className='fs-5' />Google</button>
                            <button type="button" class="btn btn-light bg-white border w-50 d-flex justify-content-center align-items-center gap-2"><FaGithub className='fs-5' />GitHub</button>
                        </div>
                    </div>
                    <div className='d-flex gap-2 justify-content-center mt-4'>
                        <p className='opacity-75'>Don't have an account?</p>
                        <Link to = "signup" className='fw-medium text-primary cursor text-decoration-none'>Sign up</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Userlogin