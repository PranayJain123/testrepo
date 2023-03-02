import React from 'react';
import './App.css';
import Students from './students';
import {BrowserRouter as Router} from "react-router-dom";
import { BaseRouter } from './components/BaseRouter';
function App() {
    
  return (
    <React.Fragment>
      <Router>
        <BaseRouter/>
      </Router>
    </React.Fragment>

      
  );
}

export default App;