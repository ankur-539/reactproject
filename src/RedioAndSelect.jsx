import React, { useState } from 'react'

function RedioAndSelect() {

    const [a, b] = useState("female");
    const [aa, bb] = useState("delhi");
    const handle = (e) => {
        b(e.target.value);
    }

    const changeCity = (e) => {
        console.log(e.target.value)
        bb(e.target.value);
    }
    return (
        <div>
            <h1>Select Your Gender: {a}</h1>
            <input type="radio" name="gender" id="male" value="male" onChange={handle} />
            <label htmlFor="male">Male</label>
            <input type="radio" name="gender" id="female" checked={a==="female"} value="female" onChange={handle} />
            <label htmlFor="female">Female</label>
            <br />
            <br />
            <br />
            <br />
            <h1>Selet City: {aa}</h1>
            <select name="" id="" defaultValue={"meerut"} onChange={changeCity}>
                <option value="delhi" >Delhi</option>
                <option value="noida">Noida</option>
                <option value="meerut">Meerut</option>
            </select>
        </div>
    )
}

export default RedioAndSelect