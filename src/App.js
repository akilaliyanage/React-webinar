import React from 'react';
import logo from './logo.svg';
import './App.css';
import Grid from '@material-ui/core/Grid';
import Header from './components/Header';
import Template from './components/Template';
import { BrowserRouter as Router,  Switch, Route, Link } from "react-router-dom";
import Success from './components/Success';
import GetDet from './components/GetDet';


function App() {


  return (
    <Router>
      <Link to="/success">
        <button>go to success</button>
      </Link>

      <Route component={Template} exact path="/"></Route>
      <Route component={Success} path="/success"></Route>
      <Route component={GetDet} exact path="/get"></Route>
    </Router>
  );
}

export default App;
