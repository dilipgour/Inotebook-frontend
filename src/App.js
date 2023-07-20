import { useState } from "react";
import {
  Routes,
  BrowserRouter,
  Route,
} from "react-router-dom";
import Notestate from './Contex/Notestate';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';
import Login from './Components/Login';
import Signup from './Components/Signup';
import Alert from './Components/Alert';
import './index.css';


function App() {
  const [alert, setAlert] = useState(null);
  const showalert=(type,msg)=>{
    setAlert({
      type:type,
      msg:msg
    })
    setTimeout(function() {
      setAlert(null)
    }, 1500);
  }
  
  return ( < Notestate > < BrowserRouter > < Navbar/ > 
  <Alert alert={alert} /> < Routes > < Route path = "/" element = { < Home showalert={showalert}/ >
  }/ > < Route path = "/about" element = { < About / >
  }/ > < Route path = "/login" element = { < Login showalert={showalert} / >
  }/ > < Route path = "/signup" element = { < Signup  showalert={showalert}/ >
  }/ > < /Routes > < /BrowserRouter > < /Notestate >
  );
}

export default App;