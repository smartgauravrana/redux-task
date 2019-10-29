import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './components/home/Home';
import Form from './components/form/Form';
import Header from './components/header/Header';
import './App.css';

class App extends Component {

  render(){
    return (
      <div className="App">
        <Header />
        <h1>Courses</h1>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/new" component={Form} />
          <Route path="/edit" component={Form} />
        </Switch>
      </div>
    );
  }
  
}

export default App;
