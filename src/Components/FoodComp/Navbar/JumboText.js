import React from 'react'
import {
    FaFacebook,
    FaTwitter,
    FaInstagram,
    FaLinkedinIn,
    FaWhatsapp,
  } from "react-icons/fa";
import NavHoc from '../../../hoc/NavHoc';
  import "./Navbar.css"

const JumboText = (props) => {
  return (
      <>
        <NavHoc>
          <div className="text-center text ">
        <p className='jumbo-top'> {props.top}</p>
        <p className="jumbo-title">{props.title}</p>
          <p className="jumbo-text">{props.text}</p>
          
           {/* Social meadia icons */}
      <div className='social-icons-container position-absolute bottom-0 end-0'>
      <>
      {/* <Link className='icons' to="https://www.facebook.com/"><FaFacebook/></Link> */}
      <a className='icons' href="https://www.facebook.com/"><FaFacebook/></a>
      <a className='icons' href=""><FaTwitter/></a>
      <a className='icons' href="https://www.instagram.com/"><FaInstagram/></a>
      <a className='icons' href="http://www.linkedin.com/in/gideon-bem-706838225"><FaLinkedinIn/></a>
      <a className='icons' href=""><FaWhatsapp/></a>
        </>
      </div>
        </div>
        </NavHoc>
    </>
  )
}

export default JumboText