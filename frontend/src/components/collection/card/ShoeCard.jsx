import React from 'react'
import './ShoeCard.css'
import shoe from '../../../assets/thumbnail/NikePegasusTrail3GORE-TEX-transformed.png'
import {AiOutlineShoppingCart} from 'react-icons/ai'
import {AiOutlineHeart} from 'react-icons/ai'
import {AiOutlineStar} from 'react-icons/ai'

const ShoeCard = () => {
  return (
    <div className='shoeCard'>
        <img src={shoe} alt="shoe" />
            <div className="sell"><span>Buy</span></div>
            <div className="cart"><div><AiOutlineShoppingCart size={20}/></div></div>
            <div className="favourite"><div><AiOutlineHeart size={20}/></div></div>
            <p className='ratingValue'>4.9</p>
            <div className="rating"><div><AiOutlineStar size={20}/></div></div>
            <div className="price">$50.00</div>
            <div className="name">Nemesis</div>
    </div>
  )
}

export default ShoeCard