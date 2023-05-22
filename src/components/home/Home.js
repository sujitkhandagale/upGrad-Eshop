import React from 'react'
import "./Home.css"
import Header from '../header/Header'
import { Link } from 'react-router-dom'

function Home() {
    return (
        <>
<Link to={"/"}>Home</Link> &nbsp;
<Link to={"/products"}>Products</Link> 
        </>
    )
}

export default Home
