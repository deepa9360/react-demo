import React, { useState } from "react";
import "./project.css"


function Project() {
  const [text, settext] = useState("")
  const [btn, setbtn] = useState([])

  const handleadd = (e) => {
    settext(e.target.value)
  }
  const handleiterm = (e) => {
    setbtn([...btn, text])

  }
  function handledel(index) {
    const listOne = btn;
    listOne.splice(index, 1);
    setbtn([...listOne])
  }

  return (

    <div className="head">
      <h1>Grocery Bud</h1>
      <input type="text" onChange={handleadd} className="add" />
      <button onClick={handleiterm} className="btn1">Add Iterm</button>
      <div>
        <h1 className="bud">{text}</h1>
        {btn.map((sd, i) => (
          <div key={i} className="menu">
            <h1 className="sd">{sd}</h1>
            <button onClick={handledel} className="btn2">Delete</button>
          </div>
        ))}

      </div>
    </div>

  )
}
export default Project;



