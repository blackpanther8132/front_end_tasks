import React, {Component} from "react";
import {Navbar, NavbarBrand, Jumbtron} from "reactstrap";

class Header extends Component{
    render(){
        return(
            <React.Fragment>
            <Navbar>
                <div className="container">
                    <NavbarBrand href="#">Rj123</NavbarBrand>
                </div>
            </Navbar>
            </React.Fragment>
        );
    }
}
export default Header;