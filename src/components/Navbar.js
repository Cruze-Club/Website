import React from 'react'
import logo from '../assets/logo.png'
import '../App.css';
import { Link } from 'react-router-dom'


function Navbar() {
    return (
        <div className="navMenu">
            <div className="nav">
                <div className="logo">
                    <Link to='/'>
                    <img className="nav-logo" src={logo} alt="logo" />
                    </Link>
                </div>
                
                <div className="nav-list">
                    <ol>
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/waitlist'>Waitlist
                        </Link></li>
                        <li><Link to='/Carpool'>Carpool
                        </Link></li>
                        <li><Link to='/about'>About
                        </Link></li>
                    </ol>
                </div>
            </div>
        </div>
    )
}

export default Navbar