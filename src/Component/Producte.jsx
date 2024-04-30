import React from 'react'
import { useContext } from 'react'
import CounterContext from '../Context/CounterContext'

export default function Producte() {

    const {increment} = useContext(CounterContext);


  return (

    <div>
      <button onClick={increment}>Add To Cart</button>
    </div>
  );
};





