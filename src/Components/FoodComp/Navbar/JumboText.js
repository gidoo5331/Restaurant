import React, {useEffect} from 'react'
import {
    FaFacebook,
    FaTwitter,
    FaInstagram,
    FaLinkedinIn,
    FaWhatsapp,
  } from "react-icons/fa";
import NavHoc from '../../../hoc/NavHoc';
  import "./Navbar.css"
  import AOS from "aos";
import "aos/dist/aos.css";

const JumboText = (props) => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
      <>
        <NavHoc>
          <div className="text-center text"  data-aos="zoom-in" data-aos-delay="300">
        <p className='jumbo-top'> {props.top}</p>
        <p className="jumbo-title">{props.title}</p>
          <p className="jumbo-text">{props.text}</p>
          
           {/* Social meadia icons */}
      {/* <div className='social-icons-container position-absolute bottom-0 end-0' data-aos="fade-zoom-in" data-aos-duration="600"> */}
      <div className='social-icons-container position-absolute bottom-0 end-0' >
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