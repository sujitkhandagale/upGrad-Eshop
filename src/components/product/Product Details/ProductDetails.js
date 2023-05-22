import React from 'react'
import "./ProductDetails.css";
import { Container } from '@mui/material';

function ProductDetails() {
    return (
        <Container>
            <div className='Product_Details'>
                <div className="product_image">
                    <img src={"https://placehold.co/300"} alt="" />
                </div>
                <div className="product_description">
                    <div className="product_details">
                        <h1>Product Name</h1>
                        <p>dghmghkl;sdfghjmsft setkghmsdfl ksrtmhldtk awergmerkl rghkler eritgyneroityjserop </p>
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default ProductDetails
