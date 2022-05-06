import React from 'react';
import {BsSuitHeart} from"react-icons/bs";
import {GoLocation} from 'react-icons/go';
import {BsTelephone} from 'react-icons/bs';
import {MdOutlineMail} from 'react-icons/md'; 
import "./Footer.css"
import Social from '../Sections/Social';

const Footer = () => {
  return (
    <>
        <div className="footer">
        <div className="row">
            <div className="col-12 col-lg-3 col-sm-4 col-md-3">
                <p className='f-title'>Gid's Resturant</p>
                <p>Far far away, behind the word mountains, 
                    far from the countries Vokalia and Consonantia, 
                    there live the blind texts.</p>
                    <h4 className='mb-4'>Connect</h4>
                    <div className="footer-social">
                    <Social margin="2%" padding="8px" size="1rem" color="#af9452" bgColor="white" borderRadius="40px 25px 25px 25px" />
                    </div>
            </div>
            <div className="col-6 col-lg-3 col-sm-4 col-md-3">
                <p className='f-title'>Quick Links</p>
                <p>Home</p>
                <p>About</p>
                <p>Services</p>
                <p>Blog</p>
                <p>Contact</p>
            </div>
            <div className="col-6 col-lg-3 col-sm-4 col-md-3">
                <p className='f-title'>Open Hours</p>
                <p className='open-hours mb-1'><span>Monday</span> <span>9:00 - 23:00</span></p>
                <p className='open-hours mb-1'>Tuesday <span>9:00 - 23:00</span></p>
                <p className='open-hours mb-1'>Wednesday <span>9:00 - 23:00</span></p>
                <p className='open-hours mb-1'>Thursday <span>9:00 - 23:00</span></p>
                <p className='open-hours mb-1'>Friday <span>9:00 - 23:00</span></p>
                <p className='open-hours mb-1'>Saturday <span>9:00 - 23:00</span></p>
                <p className='open-hours mb-1'>Sunday <span>12:00- 23:00</span></p>
        
            </div>
            <div className="col-12 col-lg-3 col-sm-4 col-md-3 ">
                <p className='f-title'>Contact Us</p>
                <ul className='footer-ul'>
        <li><GoLocation className='footer-icon'/>Greater Accra, Ghana </li>
        <li className="email"><MdOutlineMail className='footer-icon'/> <a className='footer-links' href="mailto:mail@gideonbempong533@gmail.com">gideonbempong533@gmail.com</a></li>
        <li><BsTelephone className='footer-icon'/> <a className='footer-links' href="tel:+277099220">+233 501652108</a></li>
      </ul>
            </div>
        </div>
        <p className='copyright'>Copyright ©2022 All rights reserved |Made with <BsSuitHeart /> by Gideon</p>
    </div>
    </>
  )
}

export default Footer