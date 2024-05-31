import React from 'react'
import "./about.css"
import { PiXCircle } from 'react-icons/pi'

export default function Aboutme() {
  return (
    <div id='section'>
      {/* page*/}

      <div className='main'>
        <h1 className='me'>About Me</h1>
      </div>
      <div className='cofee'>
        <div className='imgg'>
          <img src="https://bolby-react.vercel.app/images/avatar-1.svg" alt="...." height={150} width={100} />
        </div>

        <div className='paramain'>
          <div className='para'>
            <p>  As a fresher in the field, <br/>I'm constantly honing my skills and<br/> exploring the latest trends and<br/> best practices in React development.I thrive on challenges and <br/>love diving deep into problem-solving<br/> to deliver elegant and efficient solutions.</p>
            <div className='button'>
              <button className='zax'>Download CV</button>
            </div>
          </div>
        </div>
 
        <div className='mainbar'>
          <div className='sea'>
            <p className='dy'>Frontend</p>
            <div className='fnt'>
              <div className='coco'>
              </div>
            </div>
          </div>


          <div className='sea'>
            <p className='dy'>Backend</p>
            <div className='fnt'>
              <div className='coco1'>
              </div>
            </div>
          </div>

          <div className='sea'>
            <p className='dy'>Data Base</p>
            <div className='fnt'>
              <div className='coco2'>
              </div>
            </div>
          </div>
        </div>

       
      </div>

       
      <div className='logomain'>
        <div className='logsub'>
          <h1 className='skill'>My Technolgy Skill</h1>  </div>
          <div className='logoimg'>
          <div className='logo'>
        <a href=' '><img src="src/images/html-logo.png"height={120} width={80}/></a>
        </div>
        <div className='logo'>
        <a href=' '><img src="src/images/css-logo.png.webp"  height={120} width={100}/></a>
        </div>
        <div className='logo'>
        <a href=' '><img src="src/images/JS.png" height={110} width={100}/></a>
        </div>
        <div className='logo'>
        <a href=' '><img src="src/images/584830f5cef1014c0b5e4aa1.png" height={100} width={100}/></a>
        </div>

        <div className='logo'>
        <a href=' '><img src="src/images/Bootstrap_(front-end_framework)-Logo.wine.png"height={120} width={150}/></a>
        </div>

        <div className='logo'>
        <a href=' '><img src="src/images/github_PNG47.png" height={120} width={120}/></a>
        </div>

        

 






 
        </div>


       </div>


    </div>
  )
};
