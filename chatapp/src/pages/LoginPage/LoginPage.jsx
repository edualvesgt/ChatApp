import React from 'react'
import './LoginPage.scss'
export const LoginPage = () => {
    return (
        <div className="formContainer">
            <div className="formWrapper">
                <span className='logo'> Talk Chat </span>
                <span className='title'>Login </span>
                <form >

                    <input type="email" placeholder='Email' />
                    <input type="password" placeholder='password' />

                    <button>Sign in</button>
                </form>
                <p>You do have an account? Register </p>
            </div>
        </div>
    )
}
