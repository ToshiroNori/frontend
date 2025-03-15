import { useState } from "react";
import "./App.css";
import LoginForm from "./components/LoginForm";
import Register from "./components/Register";
import Profile from "./components/Profile";
import { Route, Routes } from "react-router-dom";
import { UserProvider } from "./components/UserContext";

function App() {
  const [count, setCount] = useState(0);

  return (
    <UserProvider>
      <Routes>
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </UserProvider>
  );
}

export default App;
