import React from 'react'
import ProductCard from '../components/product/ProductCard'
import { Container, TextField } from '@mui/material'
import ToggleButtons from '../components/product/ToggleButtons'

function Products() {
  return (

    <Container>
        <div className="product_search">
        <TextField label="Search Products" id="fullWidth" />
          </div>
      <div className="product_details_toggle">
        <div className="section_heading">
          <span>Products</span>
        </div>

        <div className="product_toggle">
          <ToggleButtons />
        </div>
      </div>

      <div className='product_page'>
        <ProductCard />
        <ProductCard />
      </div>


    </Container>
  )
}

export default Products
