import React from 'react'
import Logo from './Logo.png'
import './Navbar.css'

const Navbar = () => {
    return(
        <nav className="navbar navbar__completa">
            <div className="navbar-brand">
                <div className="navbar__logo">
                    
                        <img src={Logo}></img>
                       
                    <div className="navbar__nombre">Angie's Shop</div>
                </div>
            </div>
        </nav>
    )
};

export default Navbar;