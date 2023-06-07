import React from 'react'
import "./ProductDetails.css";
import { Container } from '@mui/material';
import Button from '@mui/material/Button';


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
                       <div className="product_buttons">
                       <Button variant="contained" color='success'>Place Order</Button>
                        <Button variant="contained" color='error'>Buy Now</Button>
                       </div>

                    </div>
                </div>

            </div>
            
        </Container>
    )
}

export default ProductDetails
