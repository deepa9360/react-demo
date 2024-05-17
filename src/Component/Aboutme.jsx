import React from "react";
import "../Component/aboutme.css";
export default function Aboutme() {
  return (
    <div className="secondmain">
      <div className="contain">
        <b className="me">About me</b>

        <div className="mecont">
          <div className="aboutme">
            <img
              src="src/FunComp/images/profile.jpg"
              alt=""
              height="300px"
              width="300px"
            />
          </div>
          <div className="total">
          <div className="paramain">
       
            <div className="para">
              <p>
                I am Aswinsundar , web developer from Chennai , Tamilnadu <br />
                I have rich experience in web site design and <br />
                building and customization, also <br /> I am good at WordPress.
              </p>

              <div>
                <button>Download CV</button>
              </div>
            </div>
          </div>
         
          <div className="mainbar">
            <div className="bar">
              <p>frontend</p>
              <div className="barmain">
                <div className="barsub"></div>
              </div>
            </div>
            <div className="barone">
              <p>backend</p>
              <div className="barmain">
                <div className="barsec"></div>
              </div>
            </div>
            <div className="bartwo">
              <p>database</p>
              <div className="barmain">
                <div className="barthr"></div>
              </div>
            </div>
          </div>
        </div>
        </div>

        <div className="logmain">
          <div className="memy">
            <b>My Tech Knowledge</b>
          </div>
          <div className="logsub">
            <div className="logoimg">
              <a
                href="https://developer.mozilla.org/en-US/docs/Web/HTML"
                target="_blank"
              >
                <img
                  src="src/FunComp/images/html-logo.png"
                  alt=""
                  width={170}
                  height={200}
                />
              </a>
            </div>
            <div className="logoimg">
              <a
                href="https://developer.mozilla.org/en-US/docs/Web/CSS"
                target="_blank"
              >
            
                <img
                  src="src/FunComp/images/css3-logo-png-transparent.png"
                  alt=""
                  width={200}
                  height={200}
                />
              </a>
            </div>
            <div className="logoimg">
              <a href="https://javascript.info/" target="_blank">
           
                <img
                  src="src/FunComp/images/javascript-39394.png"
                  alt=""
                  width={200}
                  height={200}
                />
              </a>
            </div>
            <div className="logoimg">
              <a href="https://getbootstrap.com/" target="_blank">
           
                <img
                  src="src/FunComp/images/Bootstrap Logo.png"
                  alt=""
                  width={200}
                  height={200}
                />
              </a>
            </div>
            <div className="logoimg">
              <a href="https://react.dev/" target="_blank">
              
                <img
                  src="src/FunComp/images/react-logo-1000-transparent_original.png"
                  alt=""
                  width={200}
                  height={200}
                />
              </a>
            </div>
            <div className="logoimg">
              <a href="https://www.python.org/" target="_blank">
             
                <img
                  src="src/FunComp/images/python-logo-png-open-2000.png"
                  alt=""
                  width={200}
                  height={200}
                />
              </a>
            </div>
            <div className="logoimg">
              <a href="https://code.visualstudio.com/" target="_blank">
             
                <img
                  src="src/FunComp/images/visual-studio-code.png"
                  alt=""
                  width={180}
                  height={180}
                />
              </a>
            </div>
            <div>
              <a href="https://github.com/" target="_blank">
           
                <img
                  src="src/FunComp/images/WhatsApp Image 2024-05-06 at 17.14.04_97e05305.jpg"
                  alt=""
                  width={200}
                  height={200}
                  className="logoimggit"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
