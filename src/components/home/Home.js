import React from 'react'
import "./Home.css"
import Header from '../header/Header'
import { Link } from 'react-router-dom'

function Home() {
    return (
        <>
<Link to={"/"}>Home</Link> &nbsp;
<Link to={"/products"}>Products</Link>  &nbsp;
<Link to={"/products/23"}>Single Product</Link> &nbsp;
        </>
    )
}

export default Home
