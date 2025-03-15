import React, { useContext, useState, useEffect } from "react";
import axios from "axios";
import { UserContext } from "./UserContext";
import { useNavigate } from "react-router-dom";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setUser, user } = useContext(UserContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(import.meta.env.VITE_BACKEND_URL);
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/auth/login`,
        {
          email: email,
          password: password,
        },
        { withCredentials: true }
      );
      setUser(response.data); // Update the user state with the response data
    } catch (error) {
      console.error("Error message:", error.response.data.message); // Handle the error
    }
  };

  useEffect(() => {
    if (user) {
      console.log("Updated user:", user); // Log the updated user after the state change
      navigate("/profile"); // Navigate to the profile page after login
    }
  }, [user]); // Only run when the user state changes

  return (
    <>
      <h1>Login Form</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email:</label>
        <input
          type="text"
          name="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          name="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
