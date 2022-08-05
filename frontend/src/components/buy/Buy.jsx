import React from 'react'
import ToggleSwitch from '../toggleSwitch/ToggleSwitch'
import './buy.css'

function Buy() {
  return (
    <div className='buy'>
      <div className="buy_mode">
        <ToggleSwitch />
        <p>BLACK</p>
      </div>

      <div className="buy_price">
        <p>Rs 25,200</p>
        <button> BUY </button>
      </div>

      <div className="buy_countryCode">
        <p className='IND'>IND</p>
        <p className='EN'>EN</p>
      </div>
    </div>
  )
}

export default Buy