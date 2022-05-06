import React from "react";
import { Link } from "react-router-dom";
import food from '../../../Media/images/food.jpg';
import "./Navbar.css"
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa";


const NavbarComp = (props) => {
  return (
    // <div className="top-div position-relative"  
    // style={{backgroundImage:  "url(" + food + ")", backgroundPosition: "center",
    // backgroundSize: "cover", 
    // backgroundRepeat: "no-repeat", height: "620px", width: "100%",}}>
      <div>
        <nav class="navbar navbar-expand-lg navbar-dark">
        {/* <nav class="navbar navbar-expand-lg navbar-light bg-light"> */}
          <div class="container-fluid">
            <Link class="navbar-brand" to="/">
              Nav Brand
            </Link>
            {/* <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"> */}
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0 tee">
                <li class="nav-item">
                  <Link class="nav-link active" aria-current="page" to="/">
                    Home
                  </Link>
                </li>
                <li class="nav-item dropdown">
                  <Link class="nav-link dropdown-toggle me-2" to="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Menu
                  </Link>
                  <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li>
                      <Link class="dropdown-item" to="/menu">
                        Menu
                      </Link>
                    </li>
                    <li>
                      <Link class="dropdown-item" to="/">
                        Another action
                      </Link>
                    </li>
                    <li>
                      <hr class="dropdown-divider" />
                    </li>
                    <li>
                      <Link class="dropdown-item" to="/">
                        Something else here
                      </Link>
                    </li>
                  </ul>
                </li>
                <li class="nav-item">
                  <Link class="nav-link me-2" to="/">
                    Events
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link me-2" to="/gallery">
                    Gallery
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link me-2" to="/about">
                    About
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link me-2" to="/contact">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
                  <Link to="/"><button type="button" className="btn btn-outline-primary btn-sm w-10">BOOK A TABLE</button> </Link>
          </div>
        </nav>

        {/* <div className="text-center text ">
          <h2> {props.top}</h2>
          <p className="jumbo-title">{props.title}</p>
          <p className="jumbo-text">
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
           when an unknown printer took a galley 
          of type and scrambled it to make a type specimen book.
          </p>
          {/* Social meadia icons *
      <div className='social-icons-container position-absolute bottom-0 end-0'>
      <>
      {/* <Link className='icons' to="https://www.facebook.com/"><FaFacebook/></Link> *
      <a className='icons' href="https://www.facebook.com/"><FaFacebook/></a>
      <a className='icons' href=""><FaTwitter/></a>
      <a className='icons' href="https://www.instagram.com/"><FaInstagram/></a>
      <a className='icons' href="http://www.linkedin.com/in/gideon-bem-706838225"><FaLinkedinIn/></a>
      <a className='icons' href=""><FaWhatsapp/></a>
        </>
      </div> 
        </div>*/}
      {/* </div> */}

    </div>
  );
};

export default NavbarComp;
