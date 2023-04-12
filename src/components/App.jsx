import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Form from "./Form";
import Outputs from "./Outputs";
import About from "./About";
import Login from "./Login";
import Callback from "../util/callback";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="/outputs/:id" element={<Outputs />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/auth/callback" element={<Callback />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
