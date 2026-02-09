import React, { useRef } from 'react'

function Xyz() {

  const handle = useRef(null);

  const handleref= (event) => {
    console.log(event);
    handle.current.focus();
    handle.current.style.width="200px";
    handle.current.style.color="red"
    handle.current.placeholder="enter something"
    handle.current.value="enter pass";

  }
  const handleToggle = (event) => {
    if(handle.current.style.display !== "none"){
      handle.current.style.display ="none"
    }
    else{
      handle.current.style.display ="inline"

    }
  }
    
  return (
    <div>
        <button onClick={handleToggle}>Toggle</button>
        <input type="text" ref={handle} />
        <button onClick={handleref}>Action</button>
    </div>
  )
}

export default Xyz;