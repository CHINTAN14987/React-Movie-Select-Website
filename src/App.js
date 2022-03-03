import React from "react";
import Home from "./Home";
import Summary from "./Summary";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<Summary />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
