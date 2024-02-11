import React, { useState } from 'react';

import './LoginForm.css';

const LoginForm = () => {
    const [showSignUp, setShowSignUp] = useState(false);

    const handleToggleView = () => {
        setShowSignUp(!showSignUp);
    };

    return (
        <div className={"auth-container"}>
            <h1 className='title'>Welcome</h1>

            <form className='forms'>

                <input className={"input"} type="email" />
                <input className={"input_password"} type="password" />
                <button className='button'> Sign in </button>
            </form>

        </div>
    );
};

export default LoginForm;
