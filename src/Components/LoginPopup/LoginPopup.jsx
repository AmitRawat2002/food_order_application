import React, { useState } from 'react'
import './LoginPopup.css'
import { assets } from '../../assets/assets'

const LoginPopup = ({setShowLogin}) => {
    const[currstate,setcurrstate] = useState("Login")
  return (
    <div className='loginpopup' id='loginpopup'>
        <form  className="login-popup-container">
            <div className="login-popup-title">
                <h2>{currstate}</h2>
                <img onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt=""/>
            </div>
            <div className="login-popup-input">
                {currstate==="Login"?<></>:<input type="text" placeholder='your name' required/>}
                <input type="text" placeholder='email' required/>
                <input type="text" placeholder='password' required/>
            </div>
            <button>{currstate==="signup"?"Create account":"Login"}</button>
            <div className="login-popup-condition">
                <input type='checkbox' required/>
                <p>By contuning i agree to the terms of use & privacy policy.</p>
            </div>
            {currstate==="Login"
            ?<p>Create a new account? <span onClick={()=>setcurrstate("Sign Up")}><button>Click here</button></span></p>
            :<p>Already have an account? <span on onClick={()=>setcurrstate("Login")}><button>Login here</button></span></p>}
        </form>



    </div>
  )
}

export default LoginPopup