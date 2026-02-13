import axios from "axios";
import { useEffect, useState } from "react";
import { FaEye } from "react-icons/fa";
import { FaDeleteLeft } from "react-icons/fa6";
import { FaRegEdit } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import { Mychart, MySecondGraph } from "./Graph";
import { Link } from "react-router-dom";


function Userdashboard() {
    const [userData, setUserData] = useState([])
    const[prev,setPrev] = useState([])

    const userapi = () => {
        axios.get("http://localhost:4000/user").then((udata) => {
            console.log(udata.data)
            setUserData(udata.data);
        })
    }

    useEffect(() => {
        userapi()
    }, [])

    const deleteUdata = (d) => {
        console.log(d);
        axios.delete(`http://localhost:4000/user/${d}`).then((x) => {
            console.log(x);
            userapi();
            toast.success("Deleted Successfull", { autoClose: 1000 })
        })
    }
    const showPrev = (d) => {
        console.log(d);
        axios.get(`http://localhost:4000/user/${d}`).then((x) => {
            console.log(x.data);
            setPrev(x.data)
        })
    }

    return (
        <div className="row mt-3">
            <ToastContainer />
            <div className="col-sm-3">
                <div className="card text-center mb-3 hight-5">
                    <div className="card-body">

                    </div>
                </div>
            </div>
            <div className="col-sm-3">
                <div className="card text-center mb-3 hight-5">
                    <div className="card-body">

                    </div>
                </div>
            </div>
            <div className="col-sm-3">
                <div className="card text-center mb-3 hight-5">
                    <div className="card-body">

                    </div>
                </div>
            </div>
            <div className="col-sm-3">
                <div className="card text-center mb-3 hight-5">
                    <div className="card-body">

                    </div>
                </div>
            </div>
            <div className="col-sm-8">
                <div className="card text-center mb-3 hight-4">
                    <div className="card-body">
                        <Mychart />
                    </div>
                </div>
            </div>
            <div className="col-sm-4">
                <div className="card text-center hight-4">
                    <div className="card-body">
                        <MySecondGraph />
                    </div>
                </div>
            </div>
            <div className="col-sm-12">
                <div className="card text-center">
                    <div className="card-body bg-white bg-danger overflow-auto rounded-5">
                        <table className="w-100 mb-3">
                            <thead>
                                <tr>
                                    <th scope="col" className="fs-9 ">List of User Details</th>
                                </tr>
                            </thead>
                        </table>
                        <table className="table table-light">
                            <thead>
                                <tr>
                                    <th scope="col" className="border">ID</th>
                                    <th scope="col" className="border">UserName</th>
                                    <th scope="col" className="border">Email</th>
                                    <th scope="col" className="border">Phone</th>
                                    <th scope="col" className="border">Dob</th>
                                    <th scope="col" className="border">Password</th>
                                    <th scope="col" className="border">Profile</th>
                                    <th scope="col" className="border">Actions
                                        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                            <div class="modal-dialog modal-dialog-centered">
                                                <div class="modal-content">
                                                    <div class="modal-body pt-4 pb-3">
                                                        <p className="opacity-75">Name: {prev.username}</p>
                                                        <p className="opacity-75">Email: {prev.emailid}</p>
                                                        <p className="opacity-75">Pass: {prev.pass}</p>
                                                        <p className="opacity-75">Dob: {prev.dob}</p>
                                                        <p className="opacity-75">Profile: {prev.profileurl}</p>
                                                        <p className="opacity-75">Phone: {prev.userphone}</p>
                                                        <p className="opacity-75">Id: {prev.id}</p>
                                                        
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {userData.map((e) => {
                                    return (
                                        <tr key={e.id}>
                                            <th scope="row" className="border align-middle">{e.id}</th>
                                            <td className="border align-middle">{e.username}</td>
                                            <td className="border align-middle">{e.emailid}</td>
                                            <td className="border align-middle">{e.userphone}</td>
                                            <td className="border align-middle">{e.dob}</td>
                                            <td className="border align-middle">{e.pass}</td>
                                            <td className="border align-middle">{e.profileurl}</td>
                                            <td className="border">
                                                <span className="badge bg-white text-primary fs-5 cursor action m-1" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => showPrev(e.id)}><FaEye /></span>
                                                <span className="badge bg-white text-danger fs-5 cursor action m-1" onClick={() => deleteUdata(e.id)}><FaDeleteLeft /></span>
                                                <span className="badge bg-white text-success fs-5 cursor action m-1"><FaRegEdit /></span>
                                            </td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Userdashboard;

