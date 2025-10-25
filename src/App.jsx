import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home.jsx";
import Page1 from "../pages/Page1.jsx";
import Blogpage from "../pages/Blogpage.jsx";
import "../src/App.css";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/page1" element={<Page1 />} /> */}
        <Route path="/blogpage" element={<Blogpage />} />
      </Routes>
    </Router>
  );
};

export default App;
