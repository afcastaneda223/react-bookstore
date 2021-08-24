/* eslint-disable no-unused-vars */
import React from 'react';
import bootstrap from 'bootstrap';
import ReactDOM from 'react-dom';
import './index.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Navbar from './components/Navbar';
import Books from './components/Books';
import Category from './components/Category';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Navbar />
      <div className="container">
        <Switch>
          <Route exact path="/">
            <Books />
          </Route>
          <Route path="/Category">
            <Category />
          </Route>
        </Switch>
      </div>
    </Router>
  </React.StrictMode>,
  document.getElementById('root'),
);
