import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Pomocus from "./components/Pomocus/Pomocus";
import Home from "./components/Home/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/newpage" element={<Pomocus />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
