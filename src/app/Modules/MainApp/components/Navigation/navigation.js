import React, { Component } from 'react';
import "../componentsStyle/componentsStyle.css";
import logo from "../../../../../assets/img/logo/freeflix.svg";
import { TextField, IconButton, Icon, InputAdornment } from '@material-ui/core';
import SearchIcon from "@material-ui/icons/Search";
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
                    <img src={logo} alt="logo" />
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

export default Navigation;