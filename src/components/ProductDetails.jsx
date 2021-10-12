import React from 'react'
import { useParams } from 'react-router'
import DATA from '../Data';

const ProductDetails = () => {
    {/* Now we need a product id which is passed from the product page*/}
    const proid = useParams();
    const prodDetail = DATA.filter(x=>x.id === proid.id);
    const product = prodDetail[0];
    console.log(product);

    return (
        <>
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <img src = {product.img} alt={product.title} />
                </div>
                <div className="col-md-6">
                    <h1>{product.title}</h1>
                    <hr/>
                    <h2>{product.price}</h2>
                    <p>{product.desc}</p>
                    <button className ="btn btn-outline-primary">Add to Cart</button>
                </div>
            </div>
        </div>
        </>
    )
}

export default ProductDetails
