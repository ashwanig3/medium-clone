import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import Header from './components/Header';
import Article from './components/Article';
import DashBoard from './components/dashboard';
import ArticleDetails from './components/articleDetails'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div>
        <Header />
        <Switch>
          <Route path="/signup" component={Signup} />
          <Route path="/login" component={Login} />
          <Route path="/article" component={Article} />
          <Route path="/" exact component={DashBoard} />
          <Route path="/details/:id" component={ArticleDetails} />
        </Switch>
      </div>
      
      </BrowserRouter>
    );
  }
}

export default App;
