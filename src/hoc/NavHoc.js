import React from "react";
import NavbarComp from "../Components/FoodComp/Navbar/Navbar";
// import "../Components/FoodComp/Navbar/Navbar.css";
import food from "../Media/images/food.jpg";

const NavHoc = (props) => {
  return (
    <div>
      <div
        className="top-div position-relative"
        style={{
          backgroundImage: "url(" + food + ")",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          height: "620px",
          width: "100%",
        }}
      >
        <NavbarComp />
        {props.children}
      </div>
    </div>
  );
};

export default NavHoc;
