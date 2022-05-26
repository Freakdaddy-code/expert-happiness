import React from "react";
import Navbar from "./Navbar";
import Home from "./pages/Home";
import Counter from "./pages/Counter";
import About from "./pages/About";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/counter" element={<Counter />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
