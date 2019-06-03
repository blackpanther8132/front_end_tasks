import React, { Component } from 'react';
import "../componentsStyle/componentsStyle.css";
import logo from "../../../../../assets/img/logo/freeflix.svg";
import { TextField, IconButton, Icon, InputAdornment } from '@material-ui/core';
import SearchIcon from "@material-ui/icons/Search";
const $ = window.$;
class Navigation extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    handleChange = (event) => {

    }
    render() {
        return (
            <div className="navigation-bar font-logo">
                <div className="navigation_left">
                    <div className="lg">
                    <img src={logo} alt="logo" />
                </div>
                </div>
                <div className="navigaion_right">
                <form>
                <input type="search" name="q" class="search-text" placeholder="Search..." />

                </form>
 
                </div>
            </div>

        );
    }
}

// function myFunction(x) {
//     $(document).ready(function() {
//     $(".navigaion_right input").focus(function() {
//         $('.lg').hide('slow');       
//         //return false;
//       });
      
//    $('.navigaion_right input').blur(function(){
//       if( !$(this).val() ) {
//             $('.lg').show('slow');
//       }
//   });
  
    
    
//   });
// }

//   var x = window.matchMedia("(max-width: 700px)")
//   myFunction(x) 
//   x.addListener(myFunction)
  export default Navigation;