import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Menu from "./servicios/Menu";
import Acerca from "./nav/Acerca";
import Navbar from "./nav/Navbar";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Menu />} />
        </Routes>
        <Acerca />
      </BrowserRouter>
    </>
  );
}

export default App;
