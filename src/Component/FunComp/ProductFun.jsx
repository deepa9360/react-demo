import React, { useState } from "react";

function ProductFun(){

    const[count,setcount] = useState(0);
    const[name,setname]=useState("")
     const handleadd =()=>{
     setcount(count+2 )

     };
    const handlename=()=>{
    setname("gowtham")
    };

    return(
        <>

        <h1>ProductFun</h1>
        <h2> count-{count}</h2>
        <h3>name- {name} </h3>
        <button onClick={handlename}>nameadd</button>
        <button onClick={handleadd}>Add</button>

        </>

    );

}
export default ProductFun;



