import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Crud App/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
