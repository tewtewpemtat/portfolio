import React from 'react';
import './App.css';
import Contact from './details/contact';
import Skills from './details/skills';
import Education from './details/education';
import AboutMe from './details/aboutme';
import Experience from './details/experience';
import Tools from './details/tools';
import { BrowserRouter as Router, Routes, Route, Link,Navigate } from 'react-router-dom';


function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li><Link to="/aboutme">About Me</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/skills">Skills</Link></li>
            <li><Link to="/education">Education</Link></li>
            <li><Link to="/experience">Experience</Link></li>
            <li><Link to="/tools">Tools</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Navigate to="/aboutme" />} /> 
          <Route path="/aboutme" element={<AboutMe />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/education" element={<Education />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/tools" element={<Tools />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;