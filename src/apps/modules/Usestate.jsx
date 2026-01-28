import React, { useState } from 'react'

function Usestate() {
  const [counter, updatecntr] = useState(0);
  const updatecounter = () => {
    updatecntr(counter+1)
  }
  const [rcounter, updatercntr] = useState(10);
  const updatercounter = () => {
    updatercntr(rcounter-1)
  }

  return (
    <div>
      <h1>{counter}</h1>
      <h1>{rcounter}</h1>
      <button onClick={updatecounter}>increase</button>
      <button onClick={updatercounter}>decrease</button>
    </div>
  )
}

export default Usestate