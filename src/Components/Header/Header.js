import React from "react";
import "../Header/Header.css";


const Header = () => {
  return (
    <div className="container-fluid w-100 banner">
     
      <img src={require("../../Images/SGI-New-Logo.jpg")} className="bannner-img" />
     
    </div>
  );
};
export default Header;