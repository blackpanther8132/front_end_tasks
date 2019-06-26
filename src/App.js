import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Homepage from './app/Modules/HomePage/Homepage';
import Network from './app/Modules/Network/NetworkPage';
import dVPN from './app/Modules/dVPN/dVPN';
import Roadmap from './app/Modules/Roadmap/RoadmapPage';
import Downloads from './app/Modules/Downloads/Downloadspage';
import Whitepaper from './app/Modules/Whitepaper/WhitepaperPage';
import Header from './app/Modules/Header/Header'
import Footer from './app/Modules/Footer/Footer'

class App extends Component {
  render() {
    const routes = (
      <Switch>
        <Route path="/dVPN" component={dVPN} />
        <Route path="/dChat" component={Homepage} />
        <Route path="/Roadmap" component={Roadmap} />
        <Route path="/Downloads" component={Downloads} />
        <Route path="/Whitepaper" component={Whitepaper} />
        <Route path="/network" component={Network} />
        <Route path="/" component={Homepage} />
      </Switch>);

    return (
      
      <div className="App">
        <Header />
                   {routes}
                   <Footer />
                   {/* <Swixer /> */}
        </div>
    );
  }
}

export default App;
