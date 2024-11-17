
import './App.css';
import About from './components/About';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import {
   // eslint-disable-next-line
  BrowserRouter as Router,
  Route,
  Routes,
  BrowserRouter
} from "react-router-dom";

function App() {
  const [mode, setMode]= useState('light');
  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark');
      document.title='TextTwist-DarkMode';
    document.body.style.backgroundColor = '#042743';
    }else{
      setMode('light');
    document.body.style.backgroundColor = 'white';
    document.title='TextTwist-LightMode';
    }
  }
    
  return(
<>
<BrowserRouter>
<Navbar title="TextTwist" mode= {mode} toggleMode={toggleMode} />
<Alert alert="You are  using Text Twist ."/>

<div className="container">
<Routes>
            <Route exact path="/about" element={<About />}>
            </Route>
            <Route exact path="/" element={<TextForm heading="Enter text to analyze"  mode={mode} />}>
            </Route>
          </Routes>
       
</div>
</BrowserRouter>
</>
  
  );
}


export default App;

