import React from 'react'
import './offeringCards.css'

function OfferingCards(props) {
    return (
        <div className='offeringCards'>
            <div className="offeringCards-image">
            <img src={props.logo} alt='support' />
            </div>
            <h3>{props.heading}</h3>
            <p>{props.content}</p>
        </div>
    )
}

export default OfferingCards