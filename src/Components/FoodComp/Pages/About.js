import React from 'react'
import JumboText from '../Navbar/JumboText'
import bf1 from "../../../Media/images/bf1.jpg"

const About = () => {
  return (
    <>
      <JumboText 
    top="WHAT WE DO"
    title="About Us" 
    text="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
    when an unknown printer took a galley of type and scrambled it to make a type 
    specimen book. "/>
        
        <div className='container-fluid row about'>
          <div className='col-6'>
            <p className='about-title'>Where does it come from</p>
            <div className='about-text ab-txt-con'>
            <p className='mb-4'>Lorem Ipsum is simply dummy text of the printing and typesetting 
            industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
            when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </p>
            <p>It has survived not only five centuries, 
            but also the leap into electronic typesetting, remaining essentially unchanged. </p>
          </div>
          </div>
          <div className='col-6'>
          <img className='about-img'
          src={bf1}/>
          </div>

          {/* second */}
          <div className='col-6 mt-4'>
          <img className='about-img'
          src={bf1}/>
           </div>
          <div className='col-6' style={{marginTop: "5%"}}>
          <p className='about-title'>Where does it come from</p>
          <div className='about-text ab-txt-con'>
            <p className='mb-4'>Lorem Ipsum is simply dummy text of the printing and typesetting 
            industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
            when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </p>
            <p>It has survived not only five centuries, 
            but also the leap into electronic typesetting, remaining essentially unchanged. </p>
          </div>
          </div>
        </div>

    </>
  )
}

export default About