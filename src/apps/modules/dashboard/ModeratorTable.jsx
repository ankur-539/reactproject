import React, { Fragment } from 'react'

function ModeratorTable(props) {

    const a = props.mdtor;

    return (
        <Fragment>
            <p className="m-0 fs-5 fw-bold">Moderator List</p>
            <table className="table table-info table-striped-columns">
                <thead>
                    <tr>
                        <th scope="col" className='border'>S.No</th>
                        <th scope="col" className='border'>U.Name</th>
                        <th scope="col" className='border'>DOB</th>
                        <th scope="col" className='border'>Gender</th>
                    </tr>
                </thead>
                <tbody>
                    {a.map((x) => {
                        return (
                            <tr key={x.id}>
                                <td className='border align-middle'>{x.id}</td>
                                <td className='border align-middle'>{x.firstName}</td>
                                <td className='border align-middle'>{x.birthDate}</td>
                                <td className='border align-middle'>{x.gender}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </Fragment>
    )
}

export default ModeratorTable