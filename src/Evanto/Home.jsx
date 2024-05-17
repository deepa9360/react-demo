import React from 'react'
import './home.css'

import { FaInstagram } from "react-icons/fa6";
import { RiTwitterXLine } from "react-icons/ri";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";
import { SiWhatsapp } from "react-icons/si";



export default function () {
    return (
        <div>
            {/*main  page*/}
          
            <div className='self'>
            
                <a href="#" className='myself'>Portfolio</a>

            <div className='dot'>
                <a href='#' className='ww'>Home</a>
                <a href='#section' className='ww'>Aboutme</a>
                <a href='#techh'className='ww'>Projects</a>
                <a href='#cont' className='ww'>Contact</a>
            </div>
           </div>
           
            {/*1st page*/}

            <div className='doe'>

                <img src='https://bolby-react.vercel.app/images/avatar-1.svg' alt='...' height={300} width={120} className='eleven'/>
                <h1 className='ae'>Deepa  S</h1>
                <p className='bs'>Iam Frontend Developer</p>
                <div className='app'>
                    <a href='#'><FaInstagram className='media' /></a>
                    <a href='#'> <RiTwitterXLine className='media'/></a>
                    <a href='#'><FaLinkedin className='media' /></a>
                    <a href='#'><FaFacebook className='media' /></a>
                    <a href='#'><SiWhatsapp className='media'/></a>

                    <br/>
                    <button className='mr'>Hire me</button>
                </div>
            </div>















































        </div>
    )
};
