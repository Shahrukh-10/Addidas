import React from 'react'
import ModelShoe from '../../assets/modelShoe.webp'
import shoe from '../../assets/thumbnail/NikeZoomXInvincible.webp'
import ShoeCard from './card/ShoeCard'
import './collection.css'

function Collection() {
  return (
   <div className="collection">
    <h1 className='collectionHeading'>Our <span>Collection</span> </h1>
    <ul className='collectionList'>
      <li>Boots</li>
      <li>Shoes</li>
      <li>Slipper</li>
      <li>Sandals</li>
      <li>Sport Shoes</li>
    </ul>
    <div className='collectionListShoes'>
      
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