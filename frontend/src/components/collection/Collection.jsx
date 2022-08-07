import React from 'react'
import ModelShoe from '../../assets/modelShoe.webp'
import shoe from '../../assets/thumbnail/NikeZoomXInvincible.webp'
import ShoeCard from './card/ShoeCard'
import './collection.css'
import {Link} from 'react-router-dom'

function Collection() {
  return (
   <div className="collection">
    <h1 className='collectionHeading'>Our <span>Collection</span> </h1>
    <ul className='collectionList'>
      {/* <li>Boots</li> */}
      <li><Link to="/collection">Boots Full Collection</Link></li>
      <li>Shoes</li>
      <li>Slipper</li>
      <li>Sandals</li>
      <li>Sport Shoes</li>
    </ul>
    <div className='collectionListShoes'>
      {/* <ShoeDisplay/> */}
      <ShoeCard/>
      <ShoeCard/>
      <ShoeCard/>
      <ShoeCard/>
      <ShoeCard/>
      <ShoeCard/>
      <ShoeCard/>
    </div>
   </div>
  )
}

export default Collection