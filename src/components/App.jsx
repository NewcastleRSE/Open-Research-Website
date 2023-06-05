import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Form from "./Form";
import Outputs from "./Outputs";
import About from "./About";
import OrcidCallback from "../util/OrcidCallback";
import Login from "./Login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="/outputs/:id" element={<Outputs />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/callback" element={<OrcidCallback />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
