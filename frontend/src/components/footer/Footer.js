import React from "react";
import "./footer.css";
import { TiSocialInstagramCircular } from "react-icons/ti";
import { TiSocialSkype } from "react-icons/ti";
import { TiSocialGithub } from "react-icons/ti";
import { TiSocialPinterest } from "react-icons/ti";
import { SiNike } from "react-icons/si";

const Footer = () => {
  return (
    <div className="footer">
      <div className="mainFooter">
        <div className="descreptionFooter">
          <div className="nikelogo">
            <SiNike size={75} color='black'/>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio esse
            eum veritatis autem veniam quisquam voluptatum necessitatibus dolore
            placeat itaque!
          </p>
          <ul>
            <li>
              <TiSocialInstagramCircular size={30} color="red" />
            </li>
            <li>
              <TiSocialSkype size={30} color="red" />
            </li>
            <li>
              <TiSocialGithub size={30} color="red" />
            </li>
            <li>
              <TiSocialPinterest size={30} color="red" />
            </li>
          </ul>
        </div>
        <div className="linksAndServices">
          <div className="firstul">
            <ul>
              <li>
                <p>Products</p>
              </li>
              <li>list of prod</li>
              <li>list of prod</li>
              <li>list of prod</li>
              <li>list of prod</li>
            </ul>
          </div>
          <div className="secondul">
            <ul>
              <li>
                <p>Products</p>
              </li>
              <li>list of prod</li>
              <li>list of prod</li>
              <li>list of prod</li>
              <li>list of prod</li>
            </ul>
          </div>
          <div className="thirdul">
            <ul>
              <li>
                <p>Products</p>
              </li>
              <li>list of prod</li>
              <li>list of prod</li>
              <li>list of prod</li>
              <li>list of prod</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="copyright">
      <p>© Sneakers</p>
      </div>
    </div>
  );
};

export default Footer;
