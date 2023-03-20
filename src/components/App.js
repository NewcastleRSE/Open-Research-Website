import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import User from "./User";
import Outputs from "./Outputs";
import About from "./About";

function App() {
  return (
    <Routes>
      <Route path="/" element={<User />} />
      <Route path="/outputs/:id" element={<Outputs />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
}

export default App;
