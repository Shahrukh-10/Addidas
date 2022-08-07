// import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Header from "./components/header/Header";
import Buy from "./components/buy/Buy";
import SideNaveBar from "./components/sideNavbar/SideNaveBar";
import { useState } from "react";
// import Title from "./components/title/Title";
// import NewStock from "./components/newStock/NewStock";
import Collection from "./components/collection/Collection";
import Title from "./components/title/Title";
import Offereings from "./components/offerings/Offereings";
import Footer from "./components/footer/Footer";
import Home from "./Home";
import { Routes, Route } from "react-router-dom"

import Login from "./components/auth/login/Login";
import Signup from "./components/auth/signup/Signup";
import FullCollection from "./components/fullCollection/FullCollection";

function App() {
  

  return (
    <div className="app">
      {/* If navbar is set to true i.e. side navbar is displayed else this will not be displayed */}
        

      <Routes>
        <Route exact path="/" element={ <Home/> } />
        <Route exact path="login" element={ <Login/> } />
        <Route exact path="signup" element={ <Signup/> } />
        <Route exact path="collection" element={ <FullCollection/> } />
      </Routes>
    </div>
  );
}

export default App;
