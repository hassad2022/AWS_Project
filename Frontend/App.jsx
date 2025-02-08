import React from "react";
import { Routes, Route } from "react-router-dom";

import Form from "./src/components/Form";
import Home from "./src/components/Home";
import Navbar from "./src/components/Navbar"
import About from "./src/components/About"

function App() {
  return (
    <> {/* Fragment ajouté ici */}
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/form" element={<Form />} />
      </Routes>
    </>
  );
}

export default App;

