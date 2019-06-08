import React, { Component } from 'react';
import "../componentsStyle/componentsStyle.css";
import logo from "../../../../../assets/img/logo/freeflix.svg";
import { TextField, IconButton, Icon, InputAdornment } from '@material-ui/core';
import SearchIcon from "@material-ui/icons/Search";
const $ = window.$;
class Navigation extends Component {
    state = {
        show: false,
        log: true,
        ss: true
      };
 
  openSearch = () => {
    this.setState({ show: true });
    this.setState({ log: true });
    this.setState({ ss: false });
  };

  closeSearch = () => {
    this.setState({ show: false });
    this.setState({ log: true });
    this.setState({ ss: true });
  };
   
    render() {
        const { show } = this.state;
        const { log } = this.state;
        const { ss } = this.state;
        return (
            <div className="navigation-bar font-logo">
         
                <div className="navigation_left">
                {log ? (
                    <div className="lg">
                       <img src={logo} alt="logo" />
                     </div>
                     ) : (
              ""
            )}
                </div>
             
                <div className="navigaion_right">
                        <div class="search-wrap" id="search-wrap">
            
                            {show ? (
                                <div>
                                <a href="#" onClick={() => this.closeSearch()} class="search-close js-search-close">
                                    <span class="fa fa-times" />
                                </a>
                                <form action="#" method="post">
                                    <input
                                    type="text" 
                                    class="form-control"
                                    placeholder="Search..."
                                    />
                                </form>
                                </div>
                                ) : (
                                ""
                            )}
                            
                        </div>  
                        {ss ? ( 
                        <div class="icons">
                        <a href="#" class="icons-btn js-search-open" onClick={() => this.openSearch()}>
                            <span class="fa fa-search"  />
                        </a>
                        </div>
                        ) : (
                        ""
                        )}






                    
                   
                </div>   
            </div>
          
        );
    }
}

  export default Navigation;