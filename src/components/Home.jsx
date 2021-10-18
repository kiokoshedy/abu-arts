import React from 'react'
import Product from './Product'
import {GithubIcon, LinkedIn, Twitter } from '@material-ui/icons';


const Home = () => {
    return (
        <div>
            <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src="/images/img.jpg" class="d-block w-100" alt="Art" height="600px"/>
                    </div>
                    <div class="carousel-item">
                        <img src="/images/img1.jpg" class="d-block w-100" alt="Art" height="600px"/>
                    </div>
                    <div class="carousel-item">
                        <img src="/images/img2.jpg" class="d-block w-100" alt="Art" height="600px"/>
                    </div>
                    <div class="carousel-item">
                        <img src="/images/img3.jpg" class="d-block w-100" alt="Art" height="600px" />
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
                <div className="icons">
                    <a href="https://twitter.com/KiokoKe_" className="icon i-twitter">
                        <Twitter />
                    </a>
                    <a href="https://github.com/kiokoshedy" className="icon i-github">
                        <GithubIcon />
                    </a>
                    <a href="https://www.linkedin.com/in/shadrack-kioko-b2a712179/" className="icon i-YoutubeIcon">
                        <LinkedIn />
                    </a>
                </div>
            </div>
            <Product/>
        </div>
    )
}

export default Home
