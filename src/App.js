import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { createBrowserHistory } from 'history';
import { Router, Route, Switch } from 'react-router';
import indexRoutes from './routes/index';
import './assets/scss/material-kit-react.css';

var hist = createBrowserHistory();

class App extends Component {
  render() {
    return (
      <Router history={hist}>
        <Switch>
          {indexRoutes.map((prop, key) => {
            return (
              <Route path={prop.path} key={key} component={prop.component} />
            );
          })}
        </Switch>
      </Router>
    );
  }
}

export default App;
