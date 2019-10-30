import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import Home from './components/home/Home';
import Form from './components/form/Form';
import Header from './components/header/Header';
import './App.css';

class App extends Component {

  render(){
    return (
      <div className="App">
        <Header />        
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/course" component={Form} />
          <Route path="/edit" component={Form} />
          <Redirect to='/' />
        </Switch>
      </div>
    );
  }
  
}

export default App;
