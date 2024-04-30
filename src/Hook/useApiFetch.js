import axios from 'axios'
import React, { useEffect, useState } from 'react'



export default function useApiFetch(url) {
  const[data,setdata] = useState([])
  const[loader,setloader]=useState(false)
  

useEffect(()=>{
  fetchData()
},[])

const fetchData = async ()=>{
  setloader(true)
let respo = await axios.get(url)
setdata(respo.data)

setloader(false)
}

  return ({data,loader} )



  };
