import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Todos from "./components/todos";
import Login from "./components/login";
import Register from "./components/register";

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/todos" element={<Todos />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
      </Routes>
    </>
  );
}

export default App;
