import React, { useState } from 'react'
import Buy from './components/buy/Buy'
import Collection from './components/collection/Collection'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import Offereings from './components/offerings/Offereings'
import Title from './components/title/Title'
import SideNaveBar from "./components/sideNavbar/SideNaveBar";
import Navbar from './components/navbar/Navbar'

const Home = () => {
  //state to display the side navbar on click on hamburger menu present in Navbar.js
  const [sideNavStatus, setSideNavStatus] = useState(false);

  //function sent as props to change the status of navbar display onclick to navbar.js and sidNavBar close button
  const displayNavStatus = () => {
    setSideNavStatus(!sideNavStatus);
  };
  return (
    <div className="mainPage">
    {sideNavStatus && <SideNaveBar displayNavStatus={displayNavStatus} />}
        <div className="headerContent">
        <Navbar displayNavStatus={displayNavStatus} />
        <Header />
        <Buy />
      </div>

      <div className="collection">
        <Title />
       <Offereings />
        <Collection />
      </div>
      <div className="footerContent">
        <Footer />
      </div> 
    </div>
  )
}

export default Home