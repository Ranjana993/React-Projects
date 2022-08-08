import React from 'react'
import { Link } from 'react-router-dom'
import "./Navbar.css"

const Navbar = () => {
    return (
        <div className='navbar'>
            <div className="navbar__logo">
                <p>choose your favourite</p>
            </div>
            <div className="navbar__items">
                <ul>
                    <Link className='li' to="/">Home </Link>
                    <Link className='li' to="/contact">Contact</Link>
                    <Link className='li' to="service">Sevices</Link>
                </ul>
            </div>
        </div>
    )
}

export default Navbar