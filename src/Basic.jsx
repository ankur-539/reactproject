import { useState } from "react";
import { Fragment } from "react/jsx-runtime";

function Abc(){

    const [val,upval] = useState("")

    return (
        <Fragment>
            <input type="text" value={val}  onChange={(e)=>upval(e.target.value)}/>
            <h1>{val}</h1>

            <input type="button" value="Clear" onClick={()=>upval("")} />
        </Fragment>
    )
}

export default Abc;