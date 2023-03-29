import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Form from "./Form";
import Outputs from "./Outputs";
import About from "./About";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="/outputs/:id" element={<Outputs />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
