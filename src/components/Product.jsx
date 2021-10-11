import React from 'react'
import { NavLink } from 'react-router-dom'
import DATA from '../Data'

const Product = () => {

    const cardItem = (item) => {
        return (
            <div class="card my-5 py-5" key={item.id} style={{width: "18rem" }}>
                <img src={item.img} class="card-img-top" alt={item.tittle} />
                <div class="card-body text-center">
                    <h5 class="card-title">{item.tittle}</h5>
                    <h5 class="card-title">{item.desc}</h5>
                    <p className="lead">Kes {item.price}</p>
                    <NavLink to = {`/products/${item.id}`} class="btn btn-outline-primary">Buy Now</NavLink>
                </div>
            </div>
        );
    }
    return (
        <div>
            <div className="container py-5">
                <div className="row">
                    <div className="col-12 text-center">
                        <h1>Products</h1>
                        <hr />
                    </div>
                </div>
                <div className="container">
                    <div className="row justify-content-around">
                        {DATA.map(cardItem)}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Product
