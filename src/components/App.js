import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import User from "./User";
import Outputs from "./Outputs";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<User />} />
        <Route path="/outputs/:id" element={<Outputs />} />
      </Routes>
    </Router>
  );
}

export default App;
