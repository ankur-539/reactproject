import React from 'react'
import { FcBusinessman } from "react-icons/fc";
// import { FcSalesPerformance } from "react-icons/fc";
// import { AiTwotoneDashboard } from "react-icons/ai";
// import { FcAssistant } from "react-icons/fc";
// import { PiInvoiceDuotone } from "react-icons/pi";
import { fakedata } from './assets/json';
import { Link } from 'react-router-dom';


export default function Welcome() {
    return (
        <div className='container'>
            <div className='row'>
                <div className="col-sm-12">
                    <h1 className='text-center p-5 fw-bold'>List Of Modules</h1>
                </div>
            </div>
            <div className="row">
                {fakedata.map((e) => {
                    return (<div className='col-sm-3 mt-3'>
                        <Link to ={e.routing} className={`card border p-4 text-center shadow text-decoration-none ${e.themes}`}>
                            <h1><FcBusinessman/></h1>
                            <h5 className='fw-bold'>{e.name}</h5>
                        </Link>
                    </div>)
                })}
            </div>
        </div>
    )
}
