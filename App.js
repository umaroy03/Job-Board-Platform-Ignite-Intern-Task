import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CustomNavbar from './components/Navbar';
import Home from './components/Home';
import JobDetails from './components/JobDetails';
import Login from './components/Login';
import Register from './components/Register';
import Profile from './components/Profile';
import Messages from './components/Messages';
import Footer from './components/Footer';
import './index.css'; // Import the CSS file

const App = () => (
  <Router>
    <div className="d-flex flex-column min-vh-100">
      <CustomNavbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/job-details/:id" element={<JobDetails />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/messages" element={<Messages />} />
      </Routes>
      <Footer />
    </div>
  </Router>
);

export default App;
