import React, { useState } from 'react'
import LandingPageShoe from '../../assets/LandingPageShoe.png'
import LandingPageShoe2 from '../../assets/LandingPageShoe1.png'
import LandingPageShoe3 from '../../assets/LandingPageShoe2.png'
import LandingPageShoe4 from '../../assets/LandingPageShoe3.png'
import LandingPageShoe5 from '../../assets/LandingPageShoe4.png'
import LandingPageShoe6 from '../../assets/LandingPageShoe5.png'
import jordanLogo from '../../assets/jordanLogo.png'

import imageCounter from '../../assets/01.png'
import imageCounter2 from '../../assets/02.png'
import imageCounter3 from '../../assets/03.png'
import imageCounter4 from '../../assets/04.png'
import imageCounter5 from '../../assets/05.png'
import imageCounter6 from '../../assets/05.png'
import './header.css'

// import UpArrow from '../../assets/UpArrow.png'
// import DownArrow from'../../assets/DownArrow.png'



function Header() {

    const shoesDetails = [
        {
            headerImage: LandingPageShoe,
            counter: imageCounter,
            heading: {
                h1: "SNEAKER",
                h2: "AIR JORDAN"
            },
            title: "AIR JORDAN 1 MID LIGHT SMOKE GREY",
            content: "The first Air Jordan 1 colorway was introduced in 1984 and the success of the silhouette is unbroken. Countless colorways and collaborations have been released since then, many of them have become true icons. AJ1s are undoubtedly one of the most popular sneakers for sneakerheads today.",
            size: "SKU: 554724-132 EU40.5-EU47 SKU: 554725-132 (GS) EU35.5-EU40 Release date: June 2021 Colorway: WHITE/BLACK-TROPICAL TWIST"
        },
        {
            headerImage: LandingPageShoe2,
            counter: imageCounter2,
            heading: {
                h1: "SNEAKER",
                h2: "AIR JORDAN"
            },
            title: "AIR JORDAN 1 MID ISLAND GREEN ",
            content: "The first Air Jordan 1 colorway was introduced in 1984 and the success of the silhouette is unbroken. Countless colorways and collaborations have been released since then, many of them have become true icons. AJ1s are undoubtedly one of the most popular sneakers for sneakerheads today.",
            size: "SKU: 554724-173 EU40.5-EU47 SKU: 554725-173 (GS) EU36-EU40 Release date: July 2020 July: WHITE/GYM RED-BLACK"
        },
        {
            headerImage: LandingPageShoe3,
            counter: imageCounter3,
            heading: {
                h1: "SNEAKER",
                h2: "AIR JORDAN"
            },
            title: "AIR JORDAN 1 MID GS 'CHICAGO 2020'",
            content: "The first Air Jordan 1 colorway was introduced in 1984 and the success of the silhouette is unbroken. Countless colorways and collaborations have been released since then, many of them have become true icons. AJ1s are undoubtedly one of the most popular sneakers for sneakerheads today.",
            size: "SKU: CT0979-300 Release date: April 2021 Colorway: STADIUM GREEN/WHITE-BLACK"
        },
        {
            headerImage: LandingPageShoe4,
            counter: imageCounter4,
            heading: {
                h1: "SNEAKER",
                h2: "AIR JORDAN"
            },
            title: "AIR JORDAN 1 ZOOM CMFT STADIUM GREEN",
            content: "The first Air Jordan 1 colorway was introduced in 1984 and the success of the silhouette is unbroken. Countless colorways and collaborations have been released since then, many of them have become true icons. AJ1s are undoubtedly one of the most popular sneakers for sneakerheads today.",
            size: "SKU: 555088-041 EU40.5-EU47 SKU: 575441-041 (GS) EU36-EU40 Release date: May 2021 Colorway: BLACK/WHITE-GAME ROYAL-BLACK"
        },
        {
            headerImage: LandingPageShoe5,
            counter: imageCounter5,
            heading: {
                h1: "SNEAKER",
                h2: "AIR JORDAN"
            },
            title: "AIR JORDAN 1 RETRO HIGH OG ROYAL TOE",
            content: "The collaboration between Michael Jordan and Nike has a successful history amounting to almost four decades. More than thirty-four generations of Jordan sneakers have already been released, but the “One” has a special place in the heart of sneaker fans. Endless number of colorways have already been released, so everybody can find his/her favourite Air Jordan 1s",
            size: "SKU: 554724-073 EU40.5-EU47 SKU: 554725-073 (GS) EU36-EU40 Release date: October 2020"
        },
        {
            headerImage: LandingPageShoe6,
            counter: imageCounter6,
            heading: {
                h1: "SNEAKER",
                h2: "AIR JORDAN"
            },
            title: "AIR JORDAN 1 RETRO HIGH OG ROYAL TOE",
            content: "The popularity of Jordan 1s haven’t changed since their release in 1984. The classic silhouette has been seen in countless colorways over the years. Sneakerheads in their teens and twenties also love to wear Air Jordan 1s, in their eyes the original AJ1s are already part of sneaker history. This is proof of being truely iconic, isn’t it?",
            size: "SKU: 555088-041 EU40.5-EU47 SKU: 575441-041 (GS) EU36-EU40 Release date: May 2020 Colorway: BLACK/WHITE-GAME ROYAL-BLACK"
        },
    ]

    const changeImage = () => {
        if (count < 6) {
            setCount(count + 1);
            setDisplayImage(shoesDetails[count]);

        }
    }

    const [count, setCount] = useState(0);
    const [displayImage, setDisplayImage] = useState(shoesDetails[count]);


    return (
        <div className='header'>
            <div className="header_content">
                <div className="header_content-heading">
                    <h1>{displayImage.heading.h1}</h1>
                    <h2> {displayImage.heading.h2}</h2>
                </div>

                <div className="header_content-title">
                    <h3>{displayImage.title}</h3>
                </div>

                <div className="header_content-paragraph">
                    <p>{displayImage.content}</p>
                </div>

                <div className="header_content-details">
                    <p>{displayImage.size}
                    </p>
                </div>
            </div>

            <div className="header_image">
                <div className="header_image-jordan">
                    <img src={displayImage.headerImage} alt="jordan1" />
                    <img src={displayImage.counter} alt="counter" className="counter" onClick={changeImage} />
                    <img src={jordanLogo} alt="counter" className="counter" onClick={changeImage}/>

                </div>
            </div>
        </div>
    )
}

export default Header