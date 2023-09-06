import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ContactPage from "./pages/ContactPage";
import ChartsAndMapsPage from "./pages/ChartsAndMapsPage";
import MyAccountPage from "./pages/MyAccountPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ContactPage />} />
        <Route path="/charts-and-maps" element={<ChartsAndMapsPage />} />
        <Route path="/myaccount" element={<MyAccountPage />} />
      </Routes>
    </Router>
  );
}

export default App;
