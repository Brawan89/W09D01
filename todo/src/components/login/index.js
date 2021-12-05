import React, { useEffect, useState } from "react";
import axios from "axios";
import Todos from "../todos";


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState("");


  useEffect(() => {
   const token = localStorage.getItem("token")
   console.log(token);
   setToken(token)
  }, []);

  // function login
  const login = async () => {
    const result = await axios.post(`${process.env.REACT_APP_BASE_URL}/login`, {
      email,
      password,
    });
    console.log(result);
    setToken(result.data.token);
    // اخزنها في localStorage
    localStorage.setItem( "token" , result.data.token )


  };

  return (
    <>
    
    {!token ? 
      <>
      <input
        type="text"
        name="email"
        placeholder="email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        name="password"
        placeholder="password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={login}>login</button>
      </>
      : 
      <Todos clearToken={setToken} token={token} />}
    </>
  );
};

export default Login;
