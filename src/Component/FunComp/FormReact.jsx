import React, { useState } from "react";


function FormReact (){
       const [name,setname]=useState("")
       const [age,setage]=useState("")
       const [email,setemail]=useState("")
       const [ishow,setishow]=useState(false);


        const handlename=(event)=>{
           setname(e.target,value)     
        }
           const handleage=(e)=>{
                setage(e.target,value) }

           const handleemail=(e)=>{
                setemail(e.target,value) }

           const handlesubmit =(e)=>{
                e.preventDefault()
                setishow(true)
         }

    return(

<div>
     <h1>Register Form</h1>
     
       <form>
        <lable>Name</lable>
        <input placeholder="enter your name" onChange={handlename}/>

         <br/>
         <br/>

        <lable>age</lable>
        <input placeholder="enter your age" onChange={handleage}/>
        
        <br/>
        <br/>

        <lable>Email</lable>
        <input placeholder="enter your email"onChange={handleemail}/>

        <br/>
        <br/>
         <button onChange={handlesubmit}>Submit</button><br/>
         
       </form>
      <div>
        <h1>Name:{name}</h1>
        <h1>Age:{age}</h1>
        <h1>Email:{email}</h1>


        </div>
       </div>

    );
 };

    export default FormReact;









