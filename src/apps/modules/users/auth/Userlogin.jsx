import React, { useState } from 'react'
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { toast,ToastContainer } from 'react-toastify';
function Userlogin() {
    const nav = useNavigate();
    const [email,updateEmail] = useState("");
    const [pass,updatePass] = useState("");
    const [showPassword,setShowPassword] = useState(false);

    const changeEmail = (e) => {
        updateEmail(e.target.value);
    }
    const changePass = (e) => {
        updatePass(e.target.value);
    }

    const Loginformsubmit = () => {
        if( email === "" || pass === "" ){
            toast.error("email and pass required");
        }
        else{
            toast.success("Welcome to dashboard",{autoClose:2000});
            setTimeout(()=>{
                nav("/dashboard")
            },2000)
        }
    }

    const HideAndShow = (e) => {
        setShowPassword(e.target.checked)
    }

    return (
        <div className="container-fluid">
            <ToastContainer/>
            <div className="row">
                <div className="col-md-12 full-wid d-flex justify-content-center align-items-center hightt flex-column bg-image">
                    <h3 className='mb-4 fw-bold c-font-gr'>Sign in your account</h3>
                    <div className='col-md-4 border c-wid p-5 border-0 c-shadow rounded fm back'>
                            <div class="mb-3">
                                <label class="form-label">Email address</label>
                                <input type="email" class="form-control" value={email} onInput={changeEmail}/>
                            </div>
                            <div class="mb-3">
                                <label class="form-label">Password</label>
                                <input type={showPassword ? "text" : "password"} class="form-control" value={pass} onInput={changePass} />
                            </div>
                            <div class="mb-3 form-check d-flex gap-2">
                                <input type="checkbox" class="form-check-input" onChange={HideAndShow} />
                                <label class="form-check-label">Show Password</label>
                                <p className='ms-auto fw-medium text-info cursor '>Forgot Password</p>
                            </div>
                            <button type="submit" class="btn w-100 btn-primary" onClick={Loginformsubmit}>Login</button>
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