import React, { useEffect, useState } from "react";
import { Auth, createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../Firebase/Firebase";
import AuthDetails from "./AuthDetails";
import Header from "../Header/Header";
import { Navigate, useNavigate } from "react-router-dom";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const Navigate = useNavigate()

  const handleSignup = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredentials) => {
        console.log(userCredentials);
      })
      .catch((error) => {
        console.log(error);
      });
  };
 

  return (
    <>
     <Header />
      <h1 style={{ textAlign: "center", marginTop: "20px" }}>Create account</h1>
      <form onSubmit={handleSignup}>
        <input
          type="email"
          placeholder="enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit"> signup </button>
        {/* <AuthDetails/> */}
      </form>
    </>
  );
};

export default Signup;
