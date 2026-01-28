import React, { useState } from 'react'
// import { FcGoogle } from "react-icons/fc";
// import { FaGithub } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';

export default function UserRegistor() {

    const [name, updatename] = useState("");
    const [pass, updatepass] = useState("");
    const [dob, updatedob] = useState("");
    const [phone, updatephone] = useState("");
    const [email, updateemail] = useState("");
    const [profile, updateprofile] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const nav = useNavigate();

    const changedob = (e) => {
        updatedob(e.target.value)
    }

    const changephone = (e) => {
        updatephone(e.target.value)
    }

    const changeEmail = (e) => {
        updateemail(e.target.value)
    }

    const changeprofile = (e) => {
        updateprofile(e.target.value)
    }

    const changeUname = (e) => {
        updatename(e.target.value)
    }

    const changePass = (e) => {
        updatepass(e.target.value);
    }

    const Signupformsubmit = () => {
        if (email === "" || pass === "" || phone === "" || name === "" || profile === "" || dob === "") {
            toast.error("fill all section first");
        }
        else {
            toast.success("new account created successfully", { autoClose: 2000 });
            setTimeout(() => {
                nav("/usermanagement")
            }, 2000)
        }
    }

    const HideAndShow = (e) => {
        setShowPassword(e.target.checked)
    }

    return (
        <div className="container-fluid">
            <ToastContainer />
            <div className="row">
                <div className="col-md-12 d-flex justify-content-center align-items-center hightt flex-column bg-image">
                    <h2 className='mb-4 fw-bold c-font-gr'>Create an account</h2>
                    <div className='col-md-6 border back p-5 border-0 c-shadow rounded fm'>
                        <div className='d-flex justify-content-between gap-3 mb-3'>
                            <div class="w-50">
                                <label class="form-label">Username</label>
                                <input type="text" class="form-control" value={name} onInput={changeUname} />
                            </div>
                            <div class="w-50">
                                <label class="form-label text-light">Dob</label>
                                <input type="date" class="form-control" value={dob} onInput={changedob} />
                            </div>
                        </div>
                        <div className='d-flex justify-content-between gap-3 mb-3'>
                            <div class="w-50">
                                <label class="form-label">Email address</label>
                                <input type="email" class="form-control" value={email} onInput={changeEmail} />
                            </div>
                            <div class="w-50">
                                <label class="form-label text-light">Phone no</label>
                                <input type="tel" class="form-control" value={phone} onInput={changephone} />
                            </div>
                        </div>
                        <div className='d-flex justify-content-between gap-3 mb-3'>
                            <div class="w-50">
                                <label class="form-label">Password</label>
                                <input type={showPassword ? "text" : "password"} class="form-control" value={pass} onInput={changePass} />
                            </div>
                            <div class="w-50">
                                <label class="form-label text-light">Profile pic</label>
                                <input type="text" class="form-control" placeholder='Url only' value={profile} onInput={changeprofile} />
                            </div>
                        </div>
                        <div class="mb-3 form-check d-flex gap-2">
                            <input type="checkbox" class="form-check-input" onChange={HideAndShow} />
                            <label class="form-check-label">Show Password</label>
                        </div>

                        <button type="submit" class="btn w-100 btn-success mt-3" onClick={Signupformsubmit}>Sign up</button>
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
