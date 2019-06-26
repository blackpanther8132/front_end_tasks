// import logo from './logo.svg';
import React, { Component } from 'react';
import './App.css';
// import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import MainApp from './app/Modules/MainApp/MainApp';
class App extends Component {
  render() {
    const routes = (
      <Switch>
        <Route path="/MainApp" component={MainApp} />
        <Route path="/" component={MainApp} />
      </Switch>);

    return (
      
      <div className="App">
                   {routes}
                   {/* <Swixer /> */}
        </div>
    );
  }
}

export default App;
