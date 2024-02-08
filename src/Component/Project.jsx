import React, { useState } from "react";



function Project (){
  const[text,settext]=useState([])
  const[btn,setbtn]=useState("")
     
const handleadd=(e)=>{
      settext(e.target.value)
}
  const handleiterm=(e)=>{
       setbtn([...text,btn ])

  }


    return(

      <div>
        <div>
      <h1>Grocery Bud</h1>
      <input type="text" onChange={handleadd}/>
      <button onClick={handleiterm}>Add Iterm</button>

     <h2>add:{text} </h2>
        </div>
      </div>



    )



}

export default Project





