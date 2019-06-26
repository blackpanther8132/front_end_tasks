import React, { Component } from 'react';
import { connect } from 'react-redux';
import WindowsIcon from '../../../assets/SystemIcon/Group.png';
import LinuxIcon from '../../../assets/SystemIcon/linux.png';
import iOSIcon from '../../../assets/SystemIcon/ios.png';
import MacIcon from '../../../assets/SystemIcon/mac.png'
import AndriodIcon from '../../../assets/SystemIcon/android.png'
import { withStyles } from '@material-ui/core/styles';
import { Route, Link } from "react-router-dom";
import { Tabs, TabList, TabPanel, Tab } from "react-tabs";
import '../Roadmap/roadmap.css';

const Home = () => (
    <div>
        <ul className='IconListItemsPlatform'>
            <li>
                <button className="systemButton">
                    <span className="ImageSpanElement">
                        <img src={WindowsIcon} alt='windows' className="ImageClass" />
                    </span>
                    <span className="IconTitle"> Windows </span>
                </button>
            </li>
            <li>
                <button className="systemButton" >
                    <span className="ImageSpanElement">
                        <img src={LinuxIcon} alt='linux' className="ImageClass" />
                    </span>
                    <span className="IconTitle"> Linux </span>
                </button>
            </li>
            <li>
                <button className="systemButton" >
                    <span className="ImageSpanElement">
                        <img src={MacIcon} alt='mac' className="ImageClass" />
                    </span>
                    <span className="IconTitle"> Mac </span>
                </button>
            </li>
            <li>
                <button className="systemButton" >
                    <span className="ImageSpanElement">
                        <img src={iOSIcon} alt='ios' className="ImageClass" />
                    </span>
                    <span className="IconTitle"> iOS </span>
                </button>
            </li>
            <li>
                <button className="systemButton" >
                    <span className="ImageSpanElement">
                        <img src={AndriodIcon} alt='android' className="ImageClass" />
                    </span>
                    <span className="IconTitle"> Android </span>
                </button>
            </li>
        </ul>
    </div>

)

const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
    },
    dense: {
        marginTop: 16,
    },
    menu: {
        width: 200,
    },
});

class Downloads extends Component {
    render() {
        const { path } = this.props.match;
        return (
            <div className="Main_section">
                <div className='downloads_page'>
                    <div className="container-fluid network_firstsection">
                        <div className="row align-items-center roadmap_section1">
                            <div className='container padding_60px'>
                                <h2 className="PlatformHead"> Platforms </h2>
                                <p className="PlatformPara">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. </p>
                                <div className="PlatformsDiv">
                                    <div>
                                        <Tabs>
                                            <TabList className="TabsList">
                                                <Tab><Link to={`${path}`} ><p>Home</p></Link></Tab>
                                                <Tab><Link to={`${path}/Chinese`} ><p>Chinese</p></Link></Tab>
                                                <Tab><Link to={`${path}/Russian`} ><p>Russian</p></Link></Tab>
                                            </TabList>

                                            <TabPanel className="TabsPanel">
                                                <Route path={`${path}`} component={Home} />
                                            </TabPanel>
                                            <TabPanel className="TabsPanel">
                                                <Route path={`${path}/Chinese`} component={Home} />
                                            </TabPanel>
                                            <TabPanel className="TabsPanel">
                                                <Route path={`${path}/Russian`} component={Home} />
                                            </TabPanel>
                                        </Tabs>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        );
    }
}
export default withStyles(styles)(connect()(Downloads));