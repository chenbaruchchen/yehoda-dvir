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
        <div className="App">
          <br />
          {
            ////////}
          }
          <ul className="App-header">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/artist">artist</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
          </ul>
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route exact path="/about" element={<About />}></Route>
            <Route exact path="/contact" element={<Contact />}></Route>
            <Route exact path="/artist" element={<Artist />}></Route>
          </Routes>
        </div>
      </Router>
      <Nav />
    </>
  );
}

export default App;
