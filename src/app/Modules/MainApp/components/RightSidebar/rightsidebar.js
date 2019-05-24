import React, { Component } from 'react';
import { IconButton, Icon } from "@material-ui/core";
import "../componentsStyle/componentsStyle.css";
import ChevronRight from '@material-ui/icons/ChevronRight';
import ChevronLeft from '@material-ui/icons/ChevronLeft';

class RightSidebar extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    handleToggleButton = () => {
        this.props.changeTheatermode();
    }
    render() {
        const { toggle } = this.props;
        return (
            <div className="right-collapse">
                <IconButton className="togglesidebar" onClick={this.handleToggleButton}>
                    {
                        toggle ? <ChevronRight /> : <ChevronLeft />
                    }
                </IconButton>
            </div>
        );
    }
}

export default RightSidebar;