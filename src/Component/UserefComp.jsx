import React, { useEffect, useRef } from 'react'
import "./style.css"


export default function UserefComp() {
    
    let inputref = useRef(null)
    useEffect(() => {
        inputref.current.focus()
    },[]);

    
    return (
       
        <div className='font'>
            <div  className='fhh'>
                <h1 className='nm'>Facebook</h1>
            <input ref={inputref} placeholder='enter your name' className='name'/>
            <br/>
            <br/>
            <input ref={inputref} placeholder='password' className='an'/>
            <br/>
            <br/>
            <input ref={inputref} placeholder='Log in'className='in' />

            </div>
        </div>
   )
};
