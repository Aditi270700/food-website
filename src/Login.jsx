
import { Link, useNavigate } from "react-router-dom";

const Login = ()=>{
let Navigate = useNavigate();
  function goToContact() {
    Navigate("/contact");
  }
    return(
        <>
        <div className="contact-form"> 
        <div className='login-popup'>
          <form className='login-popup-container'>
           <div className='login'>
            <h2>Login</h2>
          
            </div>
            <div className='login-popup-input'>
    <input type="text" placeholder='your name' required/>
<input type="email" placeholder='your email' required/>
<input type="password" placeholder='your password' required/>
            </div>
            <button className='log' onClick={goToContact}>Login</button>
            <div className='login-popup-condition'>
<input type="checkbox" required/>
<p>By continuing, i agree to the terms of use & privacy policy.</p>
            </div>
            <span >Click here</span> 
            <p>Already have an account?<span>Click here</span></p>
    
            </form> 
        </div>
        </div>
        </>
    )
}
export default Login 