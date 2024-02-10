import React, { useState } from 'react';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
// import {
//   BrowserRouter,
//   Switch,
//   Route,
//   } from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light');    // whether dark mode in on or not 
  const [alert, setAlert] = useState(null);

  const toggleMode = () => {
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled", "success");
      document.title = "TextUtils - Dark Mode";
      
      // some extra functionality in title

      // setInterval(() => {
      //   document.title = "TextUtils is amazing!!!!"
      // }, 2000);
      // setInterval(() => {
      //   document.title = "TextUtils Install it Now!!!!"
      // }, 1500);
    }

    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
      document.title = "TextUtils - Light Mode";
    }

  }

const showAlert = (message, type) =>{
  setAlert({
    msg: message,
    type: type
  })
  setTimeout(() => {
    setAlert(null);
  }, 1500);
}

  return (
    <>
    {/* <Navbar/> */}
    
    {/* <BrowserRouter> */}
    <Navbar title="TextUtils" aboutText="About TextUtils" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
      <div className="container my-3">
      {/* <Switch>
        <Route exact path="/about">
          <About/>
        </Route>  
        <Route exact path="/"> */}
          <TextForm showAlert={showAlert} heading="Enter the text to Analyze below:" mode={mode}/>
        {/* </Route>
      </Switch> */}
      </div>
    {/* </BrowserRouter> */}
    </>
  );
}

export default App;
