import React from "react";
import Nav from "../nav/Nav";
import "./header.css";
import LandingPageShoe from '../../assets/LandingPageShoe.png'
import zeroone from '../../assets/01.png';
const Header = () => {
  return (
    <div className="header">
      <Nav />
      <div className="zero_one">
        <img src={zeroone} alt="01" />
      </div>
      <div className="main_header">

      <div className="descreption_product">
        <div className="header_name">
          <p className="header_sneaker">SNEAKER</p>
          <p className="header_jordan">AIR JORDAN</p>
        </div>
        <div className="header_product_color">
          <p>AIR JORDAN 1 MID LIGHT SMOKE GREY</p>
        </div>
        <div className="header_product-para">
          <p className="para">
            The popularity of Jordan 1s haven’t changed since their release in
            1984. The classic silhouette has been seen in countless colorways
            over the years. Sneakerheads in their teens and twenties also love
            to wear Air Jordan 1s, in their eyes the original AJ1s are already
            part of sneaker history. This is proof of being truely iconic, isn’t
            it?
          </p>
          <p>
            SKU: 554724-073 EU40.5-EU47 <br />
            SKU: 554725-073 (GS) EU36-EU40 Releasebr <br />
            date: October 2020
          </p>
        </div>
      </div>
      <div className="header_image">
        <img src={LandingPageShoe} alt="Jordan" />
      </div>
      </div>
    </div>
  );
};

export default Header;
