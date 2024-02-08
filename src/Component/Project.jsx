import React, { useState } from "react";



function Project (){
  const[text,settext]=useState("")
  const[btn,setbtn]=useState([])

const handleadd=(e)=>{
      settext(e.target.value)
}
  const handleiterm=(e)=>{
       setbtn([...btn,text])

  }
   
    return(

      <div>

      <h1>Grocery Bud</h1>
      <input type="text"onChange={handleadd}/>
      <button onClick={handleiterm}>Add Iterm</button>
      <div>
     <h1>Add:{text}</h1>
     {btn.map((sd,i)=>(
      <div key={i}>
        <h1>{sd}</h1>
      </div>
     ))}
    
        </div>
      </div>

    )
}
export default Project;
