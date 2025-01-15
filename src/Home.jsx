import React from 'react'
import './App.css'
const Home = ()=>{
    return(
        <>
        <div className='navbar'>
        <h1>Tomato.</h1>
        
        <ul className='nav'>
        <li>Home</li>
        <li>Menu</li>
        <li>Contact</li>
        <li>Signup</li>
        <li>Login</li>
        </ul>
        </div>
{/* Header */}
        <div className='header'>
<div className='head'>
    <h2>Order your favourite food here</h2>
    <p>choose from a diverse menu featuring a delectable array of dishes crafted with the finest ingredients and culinary expertise. our mission is to satisty your craving and elevate</p>
    <button>Book Menu</button>
</div>
        </div>
        </>
    )
       
}
export default Home