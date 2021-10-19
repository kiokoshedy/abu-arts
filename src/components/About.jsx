import React from 'react'
import { NavLink } from 'react-router-dom'
import img from '../images/bottle.png';
import 'bootstrap-icons/font/bootstrap-icons.css';

const About = () => {
    return (
        <div>
            <div className="container py-5 my-5">
                <div className="row">
                    <div className="col-md-6">
                        <h1 className="text-primary fw-bold mb-4">About Us</h1>
                        <p className="lead mb-4">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis voluptas repudiandae repellat, quisquam dicta, vitae esse nostrum saepe, quaerat quas nemo? Reprehenderit tempora odio, eos vero itaque libero quas quia.

                        </p>

                        <div className="icons mx-auto">
                            <a href="https://twitter.com/KiokoKe_" className="bi bi-facebook me-4 fa-lg">

                            </a>
                            <a href="https://github.com/kiokoshedy" className="bi bi-instagram me-4 fa-lg">

                            </a>
                            <a href="https://www.linkedin.com/in/shadrack-kioko-b2a712179/" className="bi bi-twitter me-4 fa-lg">

                            </a>
                        </div>

                        <br/>

                        <NavLink to="/contact" className="btn btn-outline-primary px-3">Contact Us</NavLink>
                    </div>
                    <div className="col-md-6 d-flex justify-content-center">
                        <img src= {img} alt="About Us"
                            height="400px" width="300px" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
