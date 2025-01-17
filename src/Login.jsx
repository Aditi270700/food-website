// import react, { useState } from 'react'
// import './Login.css'
// import {assets} from '../../assets/assets'


const Login = ()=>{

    // const [currState,setCurrState] = useState("Signup")
    return(
        <>
        <div className='login-popup'>
          <form className='login-popup-container' >
           <div className='login'>
            <h2>Login</h2>
            {/* <img src ={assets.cross_icon} alt=""/> */}
            </div>
            <div className='login-popup-input'>
    <input type="text" placeholder='your name' required/>
<input type="email" placeholder='your email' required/>
<input type="password" placeholder='your password' required/>
            </div>
            <button className='log'>Login</button>
            <div className='login-popup-condition'>
<input type="checkbox" required/>
<p>By continuing, i agree to the terms of use & privacy policy.</p>
            </div>
            <span >Click here</span> 
            <p>Already have an account?<span>Click here</span></p>
    
            </form> 
        </div>
        </>
    )
}
export default Login 