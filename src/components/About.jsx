import React from 'react'
import { NavLink } from 'react-router-dom'

const About = () => {
    return (
        <div>
            <div className="container py-5 my-5">
                <div className="row">
                    <div className="col-md-6">
                        <h1 className="text-primary fw-bold mb-4">About Us</h1>
                        <p className="lead mb-4">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi temporibus culpa repellat laborum ipsa officia minima voluptatem quo ducimus quas dicta debitis, at velit iusto quia qui repudiandae magnam sed.
                        </p>
                        <NavLink to="/contact" className="btn btn-outline-primary px-3">Contact Us</NavLink>
                    </div>
                    <div className="col-md-6 d-flex justify-content-center">
                        <img src="/images/img.jpg" alt="About Us"
                            height="400px" width="300px" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
