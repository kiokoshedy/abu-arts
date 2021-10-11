import React from 'react'
import { NavLink } from 'react-router-dom'
import Login from './buttons/Login'
import Signup from './buttons/Signup'

const Header = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid py-2">
                    
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link active" aria-current="page" 
                                to="/">HOME</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" 
                                to="/products">PRODUCTS</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" 
                                to="/about">ABOUT</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" 
                                to="/contact">CONTACTS</NavLink>
                            </li>
                            
                        </ul>
                        
                    
                    <NavLink className="navbar-brand mx-auto fw-bold" to="#">ABUARTS DECOR</NavLink>
                    <Login/>
                    <Signup/>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Header
