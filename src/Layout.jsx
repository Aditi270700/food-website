import React from 'react'
import {Link} from 'react-router-dom'

const Header =  ()=>{
    return(
        <>
<div className='navbar'>
        <h1>Tomato.</h1>
        
        <ul className='nav'>
        <li><Link to="/" style={{textDecoration:"none" , color:"black"}}>Home</Link></li>
        <li><Link to="/" style={{textDecoration:"none" , color:"black"}}>Menu</Link></li>
        <li><Link to="/contact" style={{textDecoration:"none" , color:"black"}}>Contact</Link></li>
        <li><Link to="/signup" style={{textDecoration:"none" , color:"black"}}>Signup</Link></li>
        <li><Link to="/login" style={{textDecoration:"none" , color:"black"}}>Login</Link></li>
         <li><Link to="detail" style={{textDecoration:"none", color:"black"}}>Detail</Link></li>
        </ul>
        </div> 

        </>
    )
}

const Footer  = ()=>{

    return(
        <>
         <div className='footer' id='footer' >
<div className='footer-content'>
<div className='foot'>
<h1>Tomato.</h1>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit.<br/>
Quod eaque molestias doloremque, deleniti recusandae<br/>
repellat sunt nesciunt, sequi possimus neque eligendi<br/>
a necessitatibus impedit at obcaecati asperiores ipsam magnam! Odio?<br/>
</p>
</div>
<div className='center'>
<h1>COMPANY</h1>
<ul>
    <li>Home</li>
    <li>About us</li>
    <li>Delivery</li>
    <li>Private Policy</li>
</ul>
</div>
<div className='left'>
<h1>Get IN TOUCH</h1>
<ul>
    <li>987456123</li>
    <li>contact@fooodmenu</li>
</ul>
</div>
</div><br/><br/>
<hr/>
<div className='copy'>
    copy98745632133-AllrightForward
</div>
</div>
        </>
    )
}
export {Header,Footer}