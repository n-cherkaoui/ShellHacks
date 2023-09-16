import React from "react"
import './styles/App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./Home"
import Showcase from "./Showcase";
import Contact from "./Contact";

const App = () => {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/show" element={<Showcase/>}></Route>
          <Route path="/contact" element={<Contact/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
