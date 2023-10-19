import React from 'react'
import './Login.css'

const Login = () => {
  return (
    <div className="container-box">
    <div className="top">
        <div className="text">
            <h1>Hello.</h1>
            <p>Welcome back</p>
        </div>
        <div className="logo">
           <div className='img'></div>
        </div>
    </div>
    <div className="form">
        <form>
            <div>
                <label htmlFor="email">Email</label>
                <div className="icon">
                <i className="fa-solid fa-envelope"></i>
                <input type="email" size="35" placeholder="Enter email" id="email" name="email"/>
            </div>
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <div className="icon">
                <i className="fa-solid fa-lock"></i>
                <input type="password" size="35" placeholder="Enter password" id="password" name="password"/>
            </div>
            </div>
            <div className="forgot">
                <a href='/'>Forgot password?</a>
            </div>
            <button>Sign In</button>
        </form>
        <h4>OWM LOGISTICS</h4>
    </div>
</div>
  )
}

export default Login