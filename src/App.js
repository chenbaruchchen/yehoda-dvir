import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Routes/Home/Home";
import About from "./components/Routes/About/About";
import Contact from "./components/Routes/Contact/Contact";
import Artist from "./components/Routes/Artist/Artist";
import Nav from "./components/Nav/Nav";
function App() {
  return (
    <>
      <Router>
        <Nav />

        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/about" element={<About />}></Route>
          <Route exact path="/contact" element={<Contact />}></Route>
          <Route exact path="/artist" element={<Artist />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
