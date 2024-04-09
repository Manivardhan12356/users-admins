import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Users from "./Users";
import './App.css'
import Admin from "./Admins";

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Welcome</Link> |{" "}
        <Link to="/users">Users</Link> |{" "}
        <Link to="/admin">Admin</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/users" element={<Users />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </BrowserRouter>
  );
}

const Welcome = () => {
  return (
    <div className="center-content">
    <h1>Welcome to the Dashboard</h1>
    </div>
  )
};

export default App;
