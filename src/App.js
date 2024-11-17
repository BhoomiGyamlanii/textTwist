import './App.css';
import About from './components/About';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import TextTwist from './components/TextTwist';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.title = 'TextTwist-DarkMode';
      document.body.style.backgroundColor = '#042743';
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      document.title = 'TextTwist-LightMode';
    }
  }

  return (
    <>
      <Router>
        <Navbar title="TextTwist" aboutText="About" mode={mode} toggleMode={toggleMode} />
        <Alert alert="You are using Text Twist." />

        <div className="container">
          <Routes>
            <Route exact path="/about" element={<About />} />
            <Route path="/" element={<TextForm heading="Enter text to analyze" mode={mode} />} />
            <Route exact path="/textTwist" element={<TextTwist />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
