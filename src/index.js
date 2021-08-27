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
import { Provider } from 'react-redux';
import Navbar from './components/Navbar';
import Books from './components/Books';
import Category from './components/Category';
import store from './redux/configureStore';

ReactDOM.render(
  <React.StrictMode>
    <div className="row m-5 mainContainer rounded shadow-lg">
      <Provider store={store}>
        <Router>
          <Navbar />
          <div className="col">
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
      </Provider>
    </div>
  </React.StrictMode>,
  document.getElementById('root'),
);
