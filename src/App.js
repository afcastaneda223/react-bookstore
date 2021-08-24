import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Navbar from './components/Navbar';
import Books from './components/Books';
import Category from './components/Category';

function App() {
  return (
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
  );
}

export default App;
