import React, { useState } from 'react'
import './RegisterPage.scss'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const RegisterPage = () => {
  const [err, setErr] = useState(false);

  const handleSubmit = async (e) => {

    e.preventDefault(); // Impede que o formulário seja enviado e recarregue a página
    const displayName = e.target[0].value; // Obtém o valor do primeiro campo do formulário
    const email = e.target[1].value;
    const password = e.target[2].value;

    const auth = getAuth();

    try {
      const res = await createUserWithEmailAndPassword(auth, email, password)

    } catch (err) {
      setErr(true);
    }

  }

  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className='logo'> Talk Chat </span>
        <span className='title'>Register </span>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder='Name' />
          <input type="email" placeholder='Email' />
          <input type="password" placeholder='password' />
          <button>Sign up</button>
          {err && <span>Something went wrong</span>}
        </form>
        <p>You do have an account? Login </p>
      </div>
    </div>
  )
}

export default RegisterPage