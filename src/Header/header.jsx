import React from 'react'
import cgv_logo from "../assets/cgv logo.png";
import './header.css';
function header() {
    return (
        <div className='header-container'>

            <img src={cgv_logo} alt="" className="header_img" />
        </div>
    )
}

export default header