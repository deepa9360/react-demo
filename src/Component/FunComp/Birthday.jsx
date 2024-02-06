import React, { useState } from "react";
import "../birthday.css"
import Navbarcomp from "../Commen/NavbarComp";

const Birthday =()=>{
const [data,setdata]=useState([

    {
  
      id: 1,
  
      name: 'Bertie Yates',
  
      age: 29,
  
      image:
  
        'https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-2_ipcjws.jpg',
  
    },
  
    {
  
      id: 2,
  
      name: 'Hester Hogan',
  
      age: 32,
  
      image:
  
        'https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-3_rxtqvi.jpg',
  
    },
  
    {
  
      id: 3,
  
      name: 'Larry Little',
  
      age: 36,
  
      image:
  
        'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg',
  
    },
  
    {
  
      id: 4,
  
      name: 'Sean Walsh',
  
      age: 34,
  
      image:
  
        'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg',
  
    },
  
    {
  
      id: 5,
  
      name: 'Lola Gardner',
  
      age: 29,
  
      image:
  
        'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg',
  
    },
]); 
    const handleremove=()=>{
      setdata([])
      
    }

    return (
      
  
        <div className="menu">
           
           <h1 className="birth"> {data.length} Birthday Today </h1> 
           
           {data.map((da,i)=>(

               <div key={i} className="dude">
                <img className="img" height="100px"width="100px" src= {da.image}></img>
                <h2 className="don"> {da.name}  </h2>
                <p className="bond"> {da.age}years ago </p>
               </div>
                
           ))};
           <div>
            <button onClick={handleremove} className="btn">Clear All</button>
            </div>

    </div>

    );
    
};

 export default Birthday; 

