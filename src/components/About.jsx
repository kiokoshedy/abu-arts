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
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid, impedit. Voluptas, odio! Eligendi mollitia reprehenderit inventore dolorum laudantium, eos, dolorem libero repudiandae odit natus dolores soluta fugiat expedita quo, ducimus sit deleniti tenetur quas consequatur laboriosam nam! Iure ullam, placeat unde aut modi dolorum expedita suscipit doloremque quaerat beatae cupiditate minima quos eveniet perferendis porro soluta minus dolorem quod quisquam, sint odio. Velit laborum distinctio totam sint modi aperiam suscipit, sunt dolore quia explicabo neque maiores error consequuntur ea. Cum temporibus fugit obcaecati aliquid odio praesentium, cupiditate et modi aperiam, ducimus beatae corrupti totam in repellat hic odit eius voluptatum?
                        </p>
                        <NavLink to = "/contact" className="btn btn-outline-primary px-3">Contact Us</NavLink>
                    </div>
                    <div className="col-md-6 d-flex justify-content-center">
                        <img src="/images/img.jpg" alt="About Us"
                        height="400px" width="300px"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
