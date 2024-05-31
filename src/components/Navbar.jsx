import React, { useState } from 'react'
import './navbar.css'
import { assets } from './assets/assets'

export default function Navbar() {

    const [menu,setmenu] =useState("menu")
  return (
    <div className='navbar'>
      <img src={assets.logo} alt='' className='logo'/>
      <ul className=' navbar-menu'>
    <li onClick={()=>setmenu("home")} className={menu==="home"?"active":""}>Home</li>
    <li onClick={()=>setmenu("menu")} className={menu==="menu"?"active":""}>Menu</li>
    <li onClick={()=>setmenu("mobile-app")} className={menu==="mobile-app"?"active":""}>Mobile-app</li>
    <li  onClick={()=>setmenu("contactus")} className={menu==="contactus"?"active":""}>Contactus</li>
    </ul>

<div className='navbar-right'>
    <img src={assets.search_icon} alt="" height={20}width={20}/>
    <div className='navbar-icon'>
        <img src={assets.basket_icon} alt="" height={20}width={20}/>
<div className='dot'>

</div>
    </div>
    <button>Sign in</button>
    
</div>
    </div>
  )
}

