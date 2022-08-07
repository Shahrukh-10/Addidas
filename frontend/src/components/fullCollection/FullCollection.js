import React from 'react'
import ShoeDisplay from '../collection/shoeDisplay/ShoeDisplay'
import InfiniteScroll from "react-infinite-scroll-component";
import shoe from '../../assets/thumbnail/NikeZoomXInvincible.webp'
import './fullcollection.css'

const FullCollection = () => {
  return (
    <div className="fullCollection">
        <div className="heading">
            <h1>Collections</h1>
        </div>
        <div className="listCollection">
          <ShoeDisplay shoeImage={shoe} name={"Nemesis"} price={100} />
        <InfiniteScroll
        dataLength={50}>
          <p>dfef</p>
        </InfiniteScroll>
        </div>
    </div>
  )
}

export default FullCollection;