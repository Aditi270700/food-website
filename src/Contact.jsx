
import './Contact.css'
const Contact = ()=>{
    return(
        <>
        <div className='contact'>
          <form className='contact-container' >
           <div className='cont'>
            <h2>Contact</h2>
            </div>
            <div className='contact-popup-input'>
    <input type="text" placeholder='your name' required/>
<input type="email" placeholder='your email' required/>
<input type="number" placeholder='your contact' required/>
            </div>
            <button className='con'>Submit</button>
            {/* <div className='login-popup-condition'>
<input type="checkbox" required/>
<p>By continuing, i agree to the terms of use & privacy policy.</p>
            </div>
            <span >Click here</span> 
            <p>Already have an account?<span>Signup here</span></p> */}
    
            </form> 
        </div>
        
        
        </>
    )
}
export default Contact