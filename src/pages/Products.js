import React from 'react'
import ProductCard from '../components/product/ProductCard'
import { Container, TextField } from '@mui/material'
import ToggleButtons from '../components/product/ToggleButtons'


import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

function BasicPagination() {
  return (
    <Stack spacing={2}>
      <Pagination count={10} />
    </Stack>
  );
}

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
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
<div className="products_pagination">
   
  <BasicPagination/>
</div>
    </Container>
  )
}

export default Products
