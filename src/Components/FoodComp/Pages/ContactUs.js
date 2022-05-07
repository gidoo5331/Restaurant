import React from 'react'
import { GiPostOffice} from "react-icons/gi";
import { MdOutlinePhoneAndroid, MdOutlineMail} from "react-icons/md";
import NavHoc from '../../../hoc/NavHoc';
import JumboText from '../Navbar/JumboText';
import NavbarComp from '../Navbar/Navbar';

const ContactUs = () => {
  return (
    <>
    <JumboText 
    top="GET IN TOUCH"
    title="Contact Us" 
    text="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
    when an unknown printer took a galley of type and scrambled it to make a type 
    specimen book. "/>
        <div className="row" style={{paddingTop : "10%",paddingBottom : "10%", }}>
        <div className="col-12 col-md-6 col-lg-6 border rounded contact">
           <p className="getInTouch">Get In Touch</p>  
           {/* <hr className="w-25 bg-primary" style={{color : "cyan",border: "2px solid cyan"}}/>    */}
           <form className="row g-3">
            <div className="col-12">
            <textarea type="password" class="form-control" id="inputPassword2" placeholder="Your Message"/>
            </div>
            <div className="col-6">
            <input type="text" class="form-control" id="inputPassword2" placeholder="Your Name"/>
            </div>
            <div className="col-6">
            <input type="email" class="form-control" id="inputPassword2" placeholder="Your Email"/>
            </div>
            <div className="col-6">
            <input type="text" class="form-control" id="inputPassword2" placeholder="Subject"/>
            </div>
            <button type="submit" class="btn" style={{backgroundColor: "#62615a", color: "white"}} >Send Message</button>
            {/* <button type="submit" class="btn btn-outline-info  btn-lg" >Send Message</button> */}

           </form>
        </div>
        {/* <div className="col col-lg-4 ms-4 border rounded text-dark" style={{backgroundColor: "#0dcaf0"}}> */}
        <div className="col-12 col-md-4 col-lg-4 ms-4 border border-light rounded text-dark" >
              <div className='row'>
              <GiPostOffice className='col-2 contact-icon '/>
                <div className='col address'>
                <p className="mb-0">Accra, Ghana</p>
                <p className="mt-0 address1 text-muted">Legon, lg233</p>
                </div>

              <div className='row'>
              <MdOutlinePhoneAndroid className='col-2 contact-icon'/>
                <div className='col address'>
                <p className="mb-0 fs-6"><a className='text-decoration-none text-dark' href="tel:+277099220">+233 277 099 220</a></p>
                <p className="mt-0 address1 text-muted">Mon to Fri 8am to 5pm</p>
                </div>
              </div>
              <div className='row'>
              <MdOutlineMail className='col-2 contact-icon'/>
                <div className='col address'>
                <p className="fs-6 mt-2 address1 text-muted">gideonBempong533@gmail.com</p>
                </div>
              </div>
            </div>
        </div>
        </div>

    </>
  )
}

export default ContactUs