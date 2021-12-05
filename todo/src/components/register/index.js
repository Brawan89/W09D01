import React, { useEffect, useState } from "react";
import axios from "axios";


const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("61ac945d4681b01bd751c7ee");

  // function register
  const register = async () => {
    try {
      const result = await axios.post(`${process.env.REACT_APP_BASE_URL}/register`, {
        email,
        password,
        role,
      });
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <input
        type="email"
        name="email"
        placeholder="email"
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <input
        type="password"
        name="password"
        placeholder="password"
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      {/* شلناها لاننا عطيناها قيمه تبع اليوزر */}
      {/* <input
        type="text"
        name="role"
        onChange={(e) => {
          setRole(e.target.value);
        }}
      /> */}
      <button onClick={register}>Register</button>
    </>
  );
};

export default Register;
