import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import Header from './components/Header';
import Article from './components/Article';
import Articles from './components/articles';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div>
          <Route path="/" component={Header} />
          <Route path="/signup" exact component={Signup} />
          <Route path="/login" exact component={Login} />
          <Route path="/article" component={Article} />
          <Route path="/" exact component={Articles} />
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
