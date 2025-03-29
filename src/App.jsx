import { Route, Routes } from "react-router";
import Login from "./pages/Login";
import Registration from "./pages/Registration";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Registration />} />
    </Routes>
  );
}

export default App;
