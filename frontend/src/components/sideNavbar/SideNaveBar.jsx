import React from 'react'
import './sideNavbar.css'
import {CgProfile} from 'react-icons/cg';
import {FiSearch} from 'react-icons/fi';
import {FiShoppingBag} from 'react-icons/fi';

function SideNaveBar(props) {
    return (
      
            <div id="mySidenav" class="sidenav">
                <button class="closebtn" onClick={props.displayNavStatus}>&times;</button>
                <a href="../"><CgProfile className='icons' />Profile</a>
                <a href="../"><FiSearch className='icons' />Search</a>
                <a href="../"><FiShoppingBag className='icons' />Cart</a>

        </div>
    )
}

export default SideNaveBar