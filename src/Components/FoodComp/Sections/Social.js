import React from "react";
import {
    FaFacebook,
    FaTwitter,
    FaInstagram,
    FaLinkedinIn,
    FaWhatsapp,
  } from "react-icons/fa";
import { Link } from "react-router-dom";
import "../Food.css"

const Social = (props) => {
    const style = {
        margin: props.margin,
        color: props.color,
        backgroundColor: props.bgColor,
        borderRadius: props.borderRadius,
        padding: props.padding,
        radialGradient: "circle, red, yellow, green",
    }

  return (
    <>
      {/* <div className=""> */}
      <div style={{fontSize: props.size}}>
        <>
          <Link to="" style={style} >
            <FaFacebook />
          </Link>
          <Link to="" style={style} >
            <FaTwitter />
          </Link>
          <Link className="" to="" style={style}>
            <FaInstagram />
          </Link>
          <Link className="" to="" style={style}>
            <FaLinkedinIn />
          </Link>
          <Link className="" to="" style={style}>
            <FaWhatsapp />
          </Link>
        </>
      </div>
    </>
  );
};

export default Social;
