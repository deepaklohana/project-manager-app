import React from "react";
import Login from "./pages/login";
import Deshboard from "./pages/Deshboard";
import { Route, Routes } from "react-router-dom";
const App = () => {
  return (
    <div className="">
      {/* <Login/> */}

      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Deshboard />} />
      </Routes>
    </div>
  );
};

export default App;
