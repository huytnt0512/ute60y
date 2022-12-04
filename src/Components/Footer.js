import React from "react";
import logo1 from "../pic/logo1.png";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="conatiner text-center ">
          <div className="img">
            <img style={{ width: "100px" }} src={logo1} alt="" />
          </div>
          <p>© 2022. All rights reserved by huy26122000.</p>
          <p>Đỗ Đức Huy-MSV:1911505310128</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
