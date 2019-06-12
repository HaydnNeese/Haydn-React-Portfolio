import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Homepage from "./pages/homepage";
import About from './pages/about';
import Resume from './pages/resume';
import Contact from './pages/contact';

function App() {
  return (
    <Router>
      <Route path="/" exact component={Homepage} />
      <Route path='/about' exact component={About} />
      <Route path='/resume' exact component={Resume} />
      <Route path='/contact' exact component={Contact} />
    </Router>
  );
}

export default App;
