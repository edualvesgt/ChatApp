import React from 'react'
import './RegisterPage.scss'
export const RegisterPage = () => {
  return (
  <div className="formContainer">
    <div className="formWrapper">
        <span className='logo'> Talk Chat </span>
        <span className='title'>Register </span>
        <form >
            <input type="text"  placeholder='Name'/>
            <input type="email" placeholder='Email'/>
            <input type="password" placeholder='password' />
            
            <button>Sign up</button>
        </form>
        <p>You do have an account? Login </p>
    </div>
  </div>
  )
}
