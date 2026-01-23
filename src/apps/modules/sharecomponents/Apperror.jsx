import React from 'react'
import { Link } from 'react-router-dom';

function Apperror() {
  return (
    <div className="container-fluid">
        <div className="row c-bg-1 hightt">
            <div className="col-sm-12 fm d-flex flex-column align-items-center justify-content-center text-center">
                <p className='fs-1 fw-bold m-0 text-primary'>404</p>
                <p className='fs-7 fw-bold text-white m-0'>Page not found</p>
                <p className=' fs-4 fw-bold m-0 text-white opacity-50'>Sorry, we couldn’t find the page you’re looking for.</p>
                <Link to="/" className="btn btn-primary mt-5">Back to Home</Link>
            </div>
        </div>
    </div>
  )
}

export default Apperror;