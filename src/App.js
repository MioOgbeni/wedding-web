import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from "react-scroll-to-top";
import ScrollToOrigin from './components/ScrollToOrigin'; // Adjust the path as needed
import Header from './components/Header';
import Invite from './components/Invite';
import Info from './components/Info';
import Program from './components/Program';
import RSVP from './components/RSVP';
import Gifts from './components/Gifts';
import Footer from './components/Footer';
import './App.css'; // Main app styles, if necessary
import './components/Global.css'; // Global styles, if necessary
import { ReactComponent as Arrow } from "./assets/images/tree.svg";

function App() {
  return (
    <Router>
      <ScrollToOrigin />
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Invite />} />
          <Route path="/info" element={<Info />} />
          <Route path="/program" element={<Program />} />
          <Route path="/rsvp" element={<RSVP />} />
          <Route path="/gifts" element={<Gifts />} />
        </Routes>
        <Footer />
      </div>
      <ScrollToTop smooth top={200} component={<Arrow />} style={{ backgroundColor: "#2e7a3c" }} color="#ffffff"/>
    </Router>
  );
}

export default App;
