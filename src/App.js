import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Homepage from "./pages/homepage"
function App() {
  return (
    <Router>
    <Route path="/" exact component={Homepage} />
    </Router>
  );
}

export default App;
