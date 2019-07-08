import React, {Component} from 'react';
import '../App';
import Menu from './MainComponent'
import Home from './HomeComponent'
import { DISHES } from '../shared/dishes'
import {Switch, Route, Redirect} from "react-router-dom"
import Header from "./HeaderComponent"
import Footer from "./FooterComponent"


class Main extends Component{
  constructor(props){
    super(props);
    this.state =
    {
      dishes:DISHES
    }
  }
render (){
    const HomePage = () => {
        return(
            <Home />
        );
      }

  return (
        <React.Fragment>
        <Header />
          <Switch>
              <Route path='/home' component={HomePage} />
              <Route exact path='/menu' component={() => <Menu dishes={this.state.dishes} />} />
              <Redirect to="/menu" />
          </Switch>
          <Footer />
         </React.Fragment>
  );
}
}

export default Main;
