import React from 'react'
// import { FcGoogle } from "react-icons/fc";
// import { FaGithub } from "react-icons/fa";
import { Link } from 'react-router-dom';

export default function UserRegistor() {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-12 d-flex justify-content-center align-items-center hightt flex-column bg-image">
                    <h2 className='mb-4 fw-bold c-font-gr'>Create an account</h2>
                    <div className='col-md-6 border back p-5 border-0 c-shadow rounded fm'>
                        <div className='d-flex justify-content-between gap-3 mb-3'>
                            <div class="w-50">
                                <label class="form-label">Username</label>
                                <input type="text" class="form-control" />
                            </div>
                            <div class="w-50">
                                <label class="form-label text-light">Dob</label>
                                <input type="date" class="form-control" />
                            </div>
                        </div>
                        <div className='d-flex justify-content-between gap-3 mb-3'>
                            <div class="w-50">
                                <label class="form-label">Email address</label>
                                <input type="email" class="form-control" />
                            </div>
                            <div class="w-50">
                                <label class="form-label text-light">Phone no</label>
                                <input type="tel" class="form-control" />
                            </div>
                        </div>
                        <div className='d-flex justify-content-between gap-3 mb-3'>
                            <div class="w-50">
                                <label class="form-label">Password</label>
                                <input type="password" class="form-control" />
                            </div>
                            <div class="w-50">
                                <label class="form-label text-light">Profile pic</label>
                                <input type="text" class="form-control" placeholder='Url only' />
                            </div>
                        </div>
                        <button type="submit" class="btn w-100 btn-success mt-3">Sign up</button>
                        {/* <div className='d-flex justify-content-center mt-4'>
                            <hr className='w-50' />
                            <p className='px-3'>Or</p>
                            <hr className='w-50' />
                        </div>
                        <div className='d-flex gap-3'>
                            <button type="button" class="btn btn-light bg-white border w-50 d-flex justify-content-center align-items-center gap-2"><FcGoogle className='fs-5' />Google</button>
                            <button type="button" class="btn btn-light bg-white border w-50 d-flex justify-content-center align-items-center gap-2"><FaGithub className='fs-5' />GitHub</button>
                        </div> */}
                    </div>


                    <div className='d-flex gap-2 justify-content-center mt-4'>
                        <p className='opacity-75'>Already have an account?</p>
                        <Link to="/usermanagement" className='fw-medium text-primary cursor text-decoration-none'>Login</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
