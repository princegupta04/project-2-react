import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Updated imports
import Home from './Home';
import ModernHouseMaps from './Modern';
import InteriorDesign from './Interior';
import ContactUs from './Contact';
import HomeRenovation from './Renovation';
import LogoutSuccess from './Welcome';
import RegistrationPage from './Signup';
import SignupPage from './Signin';
import ProjectList from './Portfolio';
import HomeArchitecting from './Index_my';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Modern" element={<ModernHouseMaps />} />
          <Route path="/Interior" element={<InteriorDesign />} />
          <Route path="/Contact" element={<ContactUs />} />
          <Route path="/Renovation" element={<HomeRenovation />} />
          <Route path="/Welcome" element={<LogoutSuccess />} />
          <Route path="/Signin" element={<SignupPage />} />
          <Route path="/Signup" element={<RegistrationPage />} />
          <Route path="/Portfolio" element={<ProjectList />} />
          <Route path="/Index_my" element={<HomeArchitecting />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
