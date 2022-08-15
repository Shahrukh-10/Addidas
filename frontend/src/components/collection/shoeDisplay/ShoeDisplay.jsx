import React from "react";
import "./shoeDisplay.css";
import { BsHeart } from "react-icons/bs";
import { BsHeartFill } from "react-icons/bs";
import { BsFillStarFill } from "react-icons/bs";
import { useState } from "react";
import {useNavigate} from 'react-router-dom';

function ShoeDisplay(props) {
  let navigate = useNavigate();
  function addToWishList() {
    setWishList(!wishlistAdded);
    console.log(wishlistAdded);
  }

  const [wishlistAdded, setWishList] = useState(true);

  const productPage = () => {
    navigate("/product",{state:{id:props.id}})
    
  }

  return (
    <div className="shoeDisplay_container" onClick={()=>productPage()}>
      <div className="shoeDisplay_container-image">
        {wishlistAdded ? (
          <BsHeart
            size={30}
            color="black"
            className="wishlist"
            onClick={addToWishList}
          />
        ) : (
          <BsHeartFill
            color={"#800000"}
            size="30"
            className="wishlist"
            onClick={addToWishList}
          />
        )}
        <img src={props.shoeImage} alt="this is shoe"></img>
      </div>
      <div className="shoeContainer-info">
        <div className="shoeContainer-info_price">
          <h3>{props.name}</h3>
          <h1>{props.price}</h1>
        </div>
        <div className="shoeContainer-info_addToCart">
          <BsFillStarFill size={30} color="#d4af37" className="star" />
          <div className="shoeContainer-info_addToCart-rating">
            <p className="actualRating">4.3</p>
            <span>/</span>
            <p className="totalRating">5</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShoeDisplay;
