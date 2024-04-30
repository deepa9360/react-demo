import React, { useEffect, useState } from "react";
import CardComp from "../Commen/CardComp"


function ApiCallComp() {
   const [resdata, setresdata] = useState([]);

   useEffect(() => {
      handleapi()
      console.log("deepa")
   }, [])

   const handleapi = async () => {
      const response = await fetch('https://fakestoreapi.com/products/');
      const data = await response.json();
      setresdata(data)
       console.log(data);
      
   }

   return (
      <div> 
      <div className="container">
         <div className="row">
            {resdata.map((too, i) => (
               <div className="col-3">

                  < CardComp tittle={too.title} price={too.price} img={too.image} />

               </div>
            ))};
         </div>
    ssss  </div>
      </div>
      );

}

export default ApiCallComp;

