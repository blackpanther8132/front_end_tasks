import React, {Component} from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Main from './Components/MenuComponent'
import { DISHES } from './shared/dishes.js'


class App extends Component{

render (){

  return (
   
        <BrowserRouter>
        <div className="App">
        <Main />
        </div>
        </BrowserRouter>     

  );
}
}

export default App;
