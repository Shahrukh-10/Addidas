import { React, useState } from "react";
import "./nav.css";
import nike_white from "../../assets/nikeLogo.png";
import nike_black from "../../assets/nikeBlackLogo.png";
import { FaRegUser } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import { FiShoppingBag } from "react-icons/fi";
import { RiMenu2Line } from "react-icons/ri";
import { RiCloseFill } from "react-icons/ri";
import {MdLightMode} from "react-icons/md"
import {MdDarkMode} from "react-icons/md"
const Nav = () => {
  const [menu, setClose] = useState(false);
  const [mode, setmode] = useState("dark")
  return (
    <div className={`nav ${mode==="light"?"":"dark"}`}>
      <div className={`categoryLinks ${mode==="light"?"light":"dark"}`}>
        <li>
          <a href="#">WOMAN</a>
        </li>
        <li>
          <a href="#">MEN</a>
        </li>
        <li>
          <a href="#">ALL</a>
        </li>
      </div>
      <div className={`logo ${mode==="light"?"light":"dark"}`}>
        <div className="yourSneaker">
          <p className="your">YOUR</p>
          <p className="sneaker">SNEAKER</p>
        </div>
        <div className="nikeLogo">
          <img src={mode==="light"?nike_black:nike_white} alt="nike" />
        </div>
      </div>
      <div className={`navMenu ${mode==="light"?"light":"dark"}`}>
        {menu ? (
          <RiCloseFill
            size={20}
            onClick={() => {
              setClose(false);
            }}
          />
        ) : (
          <RiMenu2Line
            size={20}
            onClick={() => {
              setClose(true);
            }}
          />
        )}
      </div>
      <div className={`navLinks ${mode==="light"?"light":"dark"}`}>
        <a href="#">
          <FaRegUser size={20} />
        </a>
        <a href="#">
          <FiSearch size={20} />
        </a>
        <a href="#">
          <FiShoppingBag size={20} />
        </a>
        {mode==="light" ? 
          <a href="#" >
            <MdDarkMode size={20} onClick={()=>setmode("dark")}/>
          </a>
       :  
          <a href="#">
            <MdLightMode size={20} onClick={()=>setmode("light")} />
          </a>
         
      }
      </div>
      {menu && <div className={`navMenuItems ${mode==="light"?"light":"dark"}`}>
        <li>
          <a href="#">
            <FaRegUser size={15} />
          </a>
          <p>User</p>
        </li>
        <li>
          <a href="#">
            <FiSearch size={15} />
          </a>
          <p>Search</p>
        </li>
        <li>
          <a href="#">
            <FiShoppingBag size={15} />
          </a>
          <p>Cart</p>
        </li>
        {mode==="light" ? <li onClick={()=>setmode("dark")}>
          <a href="#">
            <MdDarkMode size={15} />
          </a>
          <p>Dark</p>
        </li> : <li onClick={()=>setmode("light")}>
          <a href="#">
            <MdLightMode size={15} />
          </a>
          <p>Light</p>
        </li> }
      </div>}
    </div>
  );
};

export default Nav;
