import React from "react";
import "./navbar.css";
import nikeLogo from "../../assets/nikeLogo.png";
import { CgProfile } from "react-icons/cg";
import { FiSearch } from "react-icons/fi";
import { FiShoppingBag } from "react-icons/fi";
import { FiMenu } from "react-icons/fi";
import { RiCloseFill } from "react-icons/ri";
import { RiLogoutBoxRLine } from "react-icons/ri";
import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar(props) {
    const [isLoggedIn, setisLoggedIn] = useState(!!localStorage.getItem("token"));
    const logout=()=>{
        localStorage.clear();
        localStorage.setItem("success","false");
        setisLoggedIn(false);
        alert("Logged Out successfully.")
    }
  return (
    <div className="navbar">
      <div className="navbar_category">
        <p>
          <Link to="/">WOMEN</Link>
        </p>
        <p>
          <Link to="/">MEN</Link>
        </p>
        <p>
          <Link to="/">ALL</Link>
        </p>
      </div>

      <div className="navbar_nikeLogo">
        <h3>SNEAKER</h3>
        <img src={nikeLogo} alt="nike offficial logo" />
      </div>

      <div className="navbar_phoneMenu">
        <FiMenu className="icons" onClick={props.displayNavStatus} />
      </div>

      <div className="navbar_links">
        {isLoggedIn ? 
          <Link to="/">
            <RiLogoutBoxRLine className="icons" onClick={()=>logout()} />
          </Link>
         : 
          <Link to="/login">
            <CgProfile className="icons" />
          </Link>
        }
        <FiSearch className="icons" />
        <FiShoppingBag className="icons" />
      </div>
    </div>
  );
}

export default Navbar;
