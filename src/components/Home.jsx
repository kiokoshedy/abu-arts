import React from 'react'
import Product from './Product'
import img from '../images/img.jpg';
import img1 from '../images/img1.jpg';
import img2 from '../images/img2.jpg';
import img3 from '../images/img3.jpg';



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
                        <img src={img} class="d-block w-100" alt="Art" height="600px" />
                    </div>
                    <div class="carousel-item">
                        <img src={img1} class="d-block w-100" alt="Art" height="600px" />
                    </div>
                    <div class="carousel-item">
                        <img src={img2} class="d-block w-100" alt="Art" height="600px" />
                    </div>
                    <div class="carousel-item">
                        <img src={img3} class="d-block w-100" alt="Art" height="600px" />
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

            </div>
            <div className="icons mx-auto">
                            <a href="https://twitter.com/KiokoKe_" className="bi bi-facebook me-4 fa-lg">

                            </a>
                            <a href="https://github.com/kiokoshedy" className="bi bi-instagram me-4 fa-lg">

                            </a>
                            <a href="https://www.linkedin.com/in/shadrack-kioko-b2a712179/" className="bi bi-twitter me-4 fa-lg">

                            </a>
                        </div>

            <Product />
        </div>
    )
}

export default Home
