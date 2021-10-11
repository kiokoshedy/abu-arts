import React from 'react'
import { NavLink } from 'react-router-dom'

const About = () => {
    return (
        <div>
            <div className="container">
                <div className="row">
                    <h1>About Us</h1>
                    <p className="lead">
                        Its us
                    </p>

                    <NavLink to = "/contact" className="btn btn-outline-primary">Contact Us</NavLink>
                </div>
            </div>
        </div>
    )
}

export default About
