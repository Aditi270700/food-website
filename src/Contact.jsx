 import axios from "axios"
 import React from "react"
import {  useState } from "react"
import './Contact.css'
const Contact = ()=>{

 
    let [frminp, setFrminp] = useState({
        name:"",
        email:"",
        age:"",
        city:"",
        contact:""
    })
    const changeinp = (e)=>{
    let {name,value} = e.target;
    setFrminp({...frminp,[name]:value})
    }
    const submitform = (e)=>{
        e.preventDefault()
        axios.post('http://localhost:3000/class',frminp)
        .then(r=>alert("inserted"))
    }
    

    return(
        <>
        <div className='contact-form' onSubmit={submitform}>
        <div className='contact' >
          <form className='contact-container'  >
           <div className='cont'>
            <h2>Contact</h2>
            </div>
            <div className='contact-popup-input'>
           
<input type="text" placeholder='your name'  value={frminp.name}  onChange={changeinp} />
<input type="email" placeholder='your email'  value={frminp.email}  onChange={changeinp}  />
<input type="text" placeholder='your age'  value={frminp.age}  onChange={changeinp} />
<input type="city" placeholder='your city'  value={frminp.city}  onChange={changeinp} />
<input type="text" placeholder='your contact'  value={frminp.contact}  onChange={changeinp} />
            </div>
            <button className='con'>Submit</button>
           
    
            </form> 
        </div>
        </div>
        
        </>
    )
}
export default Contact