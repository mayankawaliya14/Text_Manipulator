// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import Alert from './Components/Alert';
import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


function App() {
  const [Mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);

  }

  const toggleMode = () => {
    if(Mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor = '#343a40'
      showAlert("Dark mode has been enabled", "success")
      document.title = "React-APP Dark mode"
      // setInterval(() => {
      //   document.title = "Title for 2sec in dark"
      // }, 2000);
      // setInterval(() => {
      //   document.title = "Title for 1.5sec in dark"
      // }, 1500);
    }
    else{
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert("Light mode has been enabled", "success")
      document.title = "React-APP Light mode"
      // setInterval(() => {
      //   document.title = "Title for 2sec in Ligth"
      // }, 2000);
      // setInterval(() => {
      //   document.title = "Title for 1.5sec in Light"
      // }, 1500);
    }
  }

  return (
    <>
    <Router>
<Navbar title = "R.NAV" Aboutus = "About us" Mode={Mode} toggleMode = {toggleMode}></Navbar>
<Alert Alert={alert}/>
<Routes>
          <Route exact path="/about" element = { <About Mode={Mode}/>}>
          </Route>
          <Route path="/" element = 
                {<TextForm heading = "Enter Text below" Mode={Mode} showAlert={showAlert} />}>
          </Route>
          </Routes>
    </Router>
    </>
  );
}

export default App;
