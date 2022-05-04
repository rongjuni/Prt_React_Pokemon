/*eslint-disable*/

import React from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import NavbarComponent from "./components/Navbar";
import Pokemon from "./views/Pokemon";
import Detail from "./views/Detail";
import Welcome from "./views/Welcome";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <Router>
      <NavbarComponent />
      <Routes>
        <Route exact path="/pokemon/:numName" element={<Detail />} />
        <Route exact path="/pokemon" element={<Pokemon />} />
        <Route path="/" element={<Welcome />} />
      </Routes>
    </Router>
  );
}; // endline

export default App;
