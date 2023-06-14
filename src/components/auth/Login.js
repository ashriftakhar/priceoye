import React, { useState } from 'react';
import "./Login.css"
import { Auth, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../Firebase/Firebase';
import Header from '../Header/Header';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const Navigate = useNavigate()

const handleSubmit = (e) =>{
     e.preventDefault()
     signInWithEmailAndPassword(auth,email,password)
     .then((userCredentials)=>{
      console.log(userCredentials)
     }).catch((error)=>{
      console.log(error)
     })

}

  return (
    <>
    <Header />
     <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button style={{marginBottom:"10px"}} type="submit">Login</button>

        <button onClick={()=>Navigate("/signup")}>Create an account</button>
      </form>
    </div>
    
</>
  );
};
export default Login

