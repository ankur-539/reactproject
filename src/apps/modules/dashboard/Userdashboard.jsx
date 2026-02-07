import axios from "axios";
import { useEffect, useState } from "react";
import { FaEye } from "react-icons/fa";
import { FaDeleteLeft } from "react-icons/fa6";
import { FaRegEdit } from "react-icons/fa";
import { toast } from "react-toastify";


function Userdashboard() {
    const [userData, setUserData] = useState([])

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
            toast.success("Deleted Successfull",{autoClose:1000})
        })
    }

    return (
        <div className="row mt-3">
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

                    </div>
                </div>
            </div>
            <div className="col-sm-4">
                <div className="card text-center mb-3 hight-4">
                    <div className="card-body">

                    </div>
                </div>
            </div>
            <div className="col-sm-12">
                <div className="card text-center">
                    <div className="card-body bg-white overflow-auto">
                        <p className="fs-4 fw-medium">List of User Details</p>
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
                                    <th scope="col" className="border">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {userData.map((e) => {
                                    return (
                                        <tr>
                                            <th scope="row" className="border align-middle">{e.id}</th>
                                            <td className="border align-middle">{e.username}</td>
                                            <td className="border align-middle">{e.emailid}</td>
                                            <td className="border align-middle">{e.userphone}</td>
                                            <td className="border align-middle">{e.dob}</td>
                                            <td className="border align-middle">{e.pass}</td>
                                            <td className="border align-middle">{e.profileurl}</td>
                                            <td className="border">
                                                <span className="badge bg-white text-primary fs-5 cursor action m-1"><FaEye /></span>
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