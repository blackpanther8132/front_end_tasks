import React, { Component } from 'react';
import "../componentsStyle/componentsStyle.css";
import MediaQuery from 'react-responsive';
import $ from "jquery";
import logo from "../../../../../assets/img/logo/freeflix.svg";
import { TextField, IconButton, Icon, InputAdornment } from '@material-ui/core';
import SearchIcon from "@material-ui/icons/Search";
class Navigation extends Component {

  openSearch = () => {
    $('.form-control').focus(function(){
        $('.navigation_left').hide();
    })
    $('.form-control').focusout(function(){
        $('.navigation_left').show();
    });
    };
    render() {
          return (
          
          <div className="navigation-bar-main font-logo">
         
            <div className="navigation-bar font-logo">
         
                <div className="navigation_left">
               
                    <div className="lg">
                       <img src={logo} alt="logo" />
                     </div>
     
                </div>
             
                <div className="navigation_right">
                        <div class="search-wrap" id="search-wrap">
                            <form action="#" method="post">
                            <MediaQuery query="(max-width: 500px)">
                                    <input
                                    onFocus={this.openSearch}
                                    type="text" 
                                    class="form-control"
                                    placeholder="Search..." 
                                    />
                                    </MediaQuery>
                               <MediaQuery query="(min-width: 501px)">
                                    <input
                                    type="text" 
                                    class="form-control"
                                    placeholder="Search..." 
                                    />
                                    </MediaQuery>
                              </form>
                         </div>  
               </div>   
            </div>
          </div>
          
        );
    }
 
}

  export default Navigation;