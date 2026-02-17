import React, { Fragment } from 'react'

function AdminTable(props) {

    const a = props.userr;

    return (
        <Fragment>
            <p className="m-0 fs-5 fw-bold">User List</p>
            <table className="table table-warning table-striped">
                <thead>
                    <tr>
                        <th scope="col" className='border'>S.No</th>
                        <th scope="col" className='border'>U.Name</th>
                        <th scope="col" className='border'>DOB</th>
                        <th scope="col" className='border'>Gender</th>
                    </tr>
                </thead>
                <tbody>
                    {a.map((user) => {
                        return (
                            <tr key={user.id}>
                                <td className='border align-middle'>{user.id}</td>
                                <td className='border align-middle'>{user.firstName}</td>
                                <td className='border align-middle'>{user.birthDate}</td>
                                <td className='border align-middle'>{user.gender}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </Fragment>
    )
}

export default AdminTable;