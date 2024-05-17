import React from 'react'

export default function Card() {
  return (
   <div className='container'>
    <div className='row'>
    <div className='col-4'>
    <div className="card" >
  <img  src="src/FunComp/images/todolist.png" className="card-img-top" alt="Card image cap" />
  <div className="card-body">
    <h5 className="card-title">To-Do List</h5>
    <p className="card-text">A todo-list made with HTML, CSS, and React.js provides a user-friendly way to organize tasks.</p>
  
</div>
</div>
</div>
<div className='col-4'>
<div className="card" >
  <img src="src/FunComp/images/shopping.jpg" className="card-img-top"  alt="Card image cap" height={260} width={200}/>
  <div className="card-body">
    <h5 className="card-title">Shopping card</h5>
    <p className="card-text">A shopping cart developed with HTML, CSS, and React.js streamlines online shopping experiences.</p>
 
  </div>
  </div>
</div>

<div className='col-4'>
<div className="card" >
<img src="src/FunComp/images/WhatsApp Image 2024-05-10 at 12.45.49_1c926884.jpg" className="card-img-top"  alt="Card image cap"/>
  <div className="card-body">
    <h5 className="card-title">Figma</h5>
    <p className="card-text">Figma is a popular design tool for creating user interfaces. By using HTML, CSS, and Bootstrap, you can translate Figma designs into web pages efficiently.</p>
   
  </div>
  </div>
</div>


<div className='row'>

<div className='col-4'>
<div className="card" >
<img src="src/FunComp/images/maxresdefault.jpg" className="card-img-top"  alt="Card image cap"/>
  <div className="card-body">
    <h5 className="card-title">Birthday list</h5>
    <p className="card-text">A birthday card built with HTML, CSS, and React.js offers a dynamic and interactive way to send personalized greetings.</p>
    
  </div>
  </div>
</div>

<div className='col-4'>
<div className="card" >
<img src="src/FunComp/images/blogger.jpg" className="card-img-top"  alt="Card image cap"/>
  <div className="card-body">
    <h5 className="card-title">Blogger</h5>
    <p className="card-text">
A blogger website crafted with HTML and CSS features a clean layout with sections like header, main content area for posts, sidebars, and a footer.</p>
    </div>
  </div>
</div>




</div>
<div className='row'>
<div className="card-group">
  <div className="card">
    <img className="card-img-top" src="src/FunComp/images/todolist.png" alt="Card image cap"/>
    <div className="card-body">
      <h5 className="card-title">Card title</h5>
      <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
    </div>
    <div className="card-footer">
      <small className="text-muted">Last updated 3 mins ago</small>
    </div>
  </div>
  <div className="card">
    <img className="card-img-top" src="..." alt="Card image cap"/>
    <div className="card-body">
      <h5 className="card-title">Card title</h5>
      <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
    </div>
    <div className="card-footer">
      <small className="text-muted">Last updated 3 mins ago</small>
    </div>
  </div>
  <div className="card">
    <img className="card-img-top" src="..." alt="Card image cap"/>
    <div className="card-body">
      <h5 className="card-title">Card title</h5>
      <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
    </div>
    <div className="card-footer">
      <small className="text-muted">Last updated 3 mins ago</small>
    </div>
  </div>
</div>
</div>

</div>
   </div>


 
  )
}
