import { useEffect, useState } from "react";

function Clock() {

  const [time, setTime] = useState(0);
  const [color, setColor] = useState("aqua");
  useEffect(() => {
    setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000)
  }, [])

  const theme = (color) => {
    console.log(color.target.value)
    setColor(color.target.value)
  }

  return (
    <div>
      <h1>React Clock</h1>
      <b>Select theme:-</b>
      <select name="" id="" onChange={theme}>
        <option value="default" hidden>Default</option>
        <option value="black">Dark</option>
        <option value="white">Light</option>
      </select>
      <h1 style={{color:color,width: "fit-content", padding: 15, borderRadius: "5px", backgroundColor: "gray" }}>{time}</h1>
    </div>
  )
}

export default Clock;