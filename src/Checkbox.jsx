import React, { useState } from 'react'

function Checkbox() {

    const [skill, setSkill] = useState([]);

    const handleSkill = (item) => {
        if (item.target.checked) {
            setSkill([...skill, item.target.value]);
        }
        else {
            setSkill([...skill.filter((e)=>e !== item.target.value)])
        }
    }

    return (
        <div>
            <h1>Choose Skills</h1>
            <input type="checkbox" name="" id="html" value="HTML" onChange={handleSkill} />
            <label htmlFor="html">HTML</label>
            <br />
            <br />
            <input type="checkbox" name="" id="css" value="CSS" onChange={handleSkill} />
            <label htmlFor="css">CSS</label>
            <br />
            <br />
            <input type="checkbox" name="" id="js" value="JS" onChange={handleSkill} />
            <label htmlFor="js">JS</label>
            <p>{skill}</p>
        </div>
    )
}

export default Checkbox