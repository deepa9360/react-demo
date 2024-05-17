import React from 'react'
import "./contact.css"

export default function Contact() {
    return (
        <div id='cont'>

            <div className='clg'>
                <h1 className='tree'> Get in  Touch</h1>
                <p className='talk'>Let's talk about everything!</p>
            </div>

            <div className='allmess'>
                <div className='hell'>
                    <div className='name'>
                        <input type="text" placeholder='Your name' className='int' /><br /><br />
                    </div>
                    <div className='xx'>
                        <input type="text" placeholder='Email Address' className='int' /><br /><br />
                    </div>
                </div>

                <div className='sub'>
                    <input type="text" placeholder='Subject' className='put' /><br /><br />
                </div>
                <div className='mess'>
                    <input type="text" placeholder='Messages' className='mes' /><br /><br />
                </div>
                <div className='send'>
                    <button className='fatp'>Send messages</button>
                </div>

            </div>
        </div>
    )
};
