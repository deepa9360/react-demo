import React, { useEffect } from 'react'
import axios from "axios";
import useApiFetch from '../Hook/useApiFetch';
import Loder from './Loder';


export default function HomeComp() {

  let { data,loader } = useApiFetch('https://fakestoreapi.com/products')
  console.log(data);


  return (
  
    <div>

{
  loader?<Loder/>:
      
       <>
      {data.map((da) => (
          <h1> {da.title} </h1>
          
          ))};
         </>
}
    </div>
  );
};



