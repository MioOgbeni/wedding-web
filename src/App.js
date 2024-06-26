import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Invite from './components/Invite';
import Info from './components/Info';
import Program from './components/Program';
import RSVP from './components/RSVP';
import './App.css'; // Main app styles, if necessary

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Invite />} />
          <Route path="/info" element={<Info />} />
          <Route path="/program" element={<Program />} />
          <Route path="/rsvp" element={<RSVP />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
