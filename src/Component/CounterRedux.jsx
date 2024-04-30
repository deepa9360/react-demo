import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { counterAction } from '../Redux/counterslice'

export default function CounterRedux() {

const count = useSelector((store)=>store.counter.rice)

  const dispatch = useDispatch();
 const handleadd = ()=>{
    dispatch(counterAction.increment())
 }
const handledec =()=>{
  dispatch(counterAction.decrement())
}




  return (
    <div>

      CounterRedux
      <h1> {count} </h1>
      <button  onClick={handleadd}>Add</button>
      <button onClick={handledec}>Dec</button>

    </div>


  )
}


