import React, { useState } from "react";
import Navbar from "./Navbar";
import Home from "./pages/Home";
import Counter from "./pages/Counter";
import About from "./pages/About";
import { Route, Routes } from "react-router-dom";
import Effect from "./pages/Effect";
import Size from "./pages/Size";

export default function App() {
  const [darkTheme, setDarkTheme] = useState(true);
  function toggleTheme() {
    setDarkTheme((prevDarkTheme) => !prevDarkTheme);
  }
  const themeStyles = {
    backgroundColor: darkTheme ? "#333" : "#CCC",
    color: darkTheme ? "#CCC" : "#333",
    padding: "2rem",
    margin: "2rem",
  };
  return (
    <>
      <div className="container" style={themeStyles}>
        <Navbar />
        <button onClick={toggleTheme}>Toggle Theme</button>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/counter" element={<Counter />} />
          <Route path="/about" element={<About />} />
          <Route path="/effect" element={<Effect />} />
          <Route path="/size" element={<Size />} />
        </Routes>
      </div>
    </>
  );
}
