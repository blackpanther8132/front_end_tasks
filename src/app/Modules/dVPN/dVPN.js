import React, { Component } from 'react';
import Icon from '../Shared/Icon';
// import { connect } from 'react-redux';
import './dVPN.css'
import '../Roadmap/roadmap.css';
import WindowsIcon from '../../../assets/SystemIcon/Group.png';
import LinuxIcon from '../../../assets/SystemIcon/linux.png';
import iOSIcon from '../../../assets/SystemIcon/ios.png';
import MacIcon from '../../../assets/SystemIcon/mac.png'
import AndriodIcon from '../../../assets/SystemIcon/android.png'
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";

// import { CarouselProvider,Slider, Slide, ButtonBack, ButtonNext ,DotGroup} from 'pure-react-carousel';
// import 'pure-react-carousel/dist/react-carousel.es.css';
import { Avatar, Button, Typography } from '@material-ui/core';
import classNames from 'classnames';
// import {FuseAnimate,FusePageSimple} from '@fuse';
import CSSTransitionGroup from 'react-addons-css-transition-group';
import Testimonials from './Testimonials';
import Testimonials_757px from './Testimonials_757px';
import SliderCenter from './SliderCenter'
import repo from '../../../assets/image.png'
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Video_img from '../../../assets/video_bg.png'
import LiveNodes from '../../../assets/Mask Group.png'

import Card from '@material-ui/core/Card';
import vector from '../../../assets/Vector.png'
import vector_white from '../../../assets/vector_white.png'
import { BrowserRouter, Route, Link } from "react-router-dom"
import { Tabs, TabList, TabPanel, Tab } from "react-tabs"
import "react-tabs/style/react-tabs.css";

// Mailing
import mailingImg from '../../../assets/mailing_list.png';
import TextField from '@material-ui/core/TextField';

class Item extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            level: this.props.level
        }
    }

    render() {
        const className = 'item level' + this.props.level
        return (
            <div className={className}>
                {this.props.id}
            </div>
        )
    }
}

class Carousel extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            items: this.props.items,
            active: this.props.active,
            direction: ''
        }
        this.rightClick = this.moveRight.bind(this)
        this.leftClick = this.moveLeft.bind(this)
    }

    generateItems() {
        var items = []
        var level
        console.log(this.state.active)
        for (var i = this.state.active - 2; i < this.state.active + 3; i++) {
            var index = i
            if (i < 0) {
                index = this.state.items.length + i
            } else if (i >= this.state.items.length) {
                index = i % this.state.items.length
            }
            level = this.state.active - i
            items.push(<Item key={index} id={this.state.items[index]} level={level} />)
        }
        return items
    }

    moveLeft() {
        var newActive = this.state.active
        newActive--
        this.setState({
            active: newActive < 0 ? this.state.items.length - 1 : newActive,
            direction: 'left'
        })
    }

    moveRight() {
        var newActive = this.state.active
        this.setState({
            active: (newActive + 1) % this.state.items.length,
            direction: 'right'
        })
    }

    render() {

        return (
            <div className="CarouselMainClass">
                <div id="carousel" className="noselect">
                    <div className="arrow arrow-left" onClick={this.leftClick}><i className="fi-arrow-left"></i></div>
                    <CSSTransitionGroup
                        transitionName={this.state.direction}>
                        {this.generateItems()}
                    </CSSTransitionGroup>
                    <div className="arrow arrow-right" onClick={this.rightClick}><i className="fi-arrow-right"></i></div>
                </div>
            </div>
        )
    }
}

const Home = () => (
    <div>
        <ul className='IconListItemsPlatform'>
            <li>
                <button className="systemButton">
                    <span className="ImageSpanElement">
                        <img src={WindowsIcon} className="ImageClass" />
                    </span>
                    <span className="IconTitle"> Windows </span>
                </button>
            </li>
            <li>
                <button className="systemButton" >
                    <span className="ImageSpanElement">
                        <img src={LinuxIcon} className="ImageClass" />
                    </span>
                    <span className="IconTitle"> Linux </span>
                </button>
            </li>
            <li>
                <button className="systemButton" >
                    <span className="ImageSpanElement">
                        <img src={MacIcon} className="ImageClass" />
                    </span>
                    <span className="IconTitle"> Mac </span>
                </button>
            </li>
            <li>
                <button className="systemButton" >
                    <span className="ImageSpanElement">
                        <img src={iOSIcon} className="ImageClass" />
                    </span>
                    <span className="IconTitle"> iOS </span>
                </button>
            </li>
            <li>
                <button className="systemButton" >
                    <span className="ImageSpanElement">
                        <img src={AndriodIcon} className="ImageClass" />
                    </span>
                    <span className="IconTitle"> Android </span>
                </button>
            </li>
        </ul>
    </div>

)

class History extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        let current = this.props.current;
        let items = this.props.items.map((el, index) => {
            let name = (index == current) ? 'active' : '';
            return (
                <li key={index}>
                    <button
                        className={name}
                        onClick={() => this.props.changeSilde(current, index)}
                    ></button>
                </li>
            )
        });

        return (
            <ul>{items}</ul>
        )
    }
}

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [
                'https://images.unsplash.com/photo-1425342605259-25d80e320565?dpr=1&auto=format&fit=crop&w=568&h=379&q=60&cs=tinysrgb&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D',
                'https://images.unsplash.com/photo-1425342605259-25d80e320565?dpr=1&auto=format&fit=crop&w=568&h=379&q=60&cs=tinysrgb&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D',
                'https://images.unsplash.com/photo-1425342605259-25d80e320565?dpr=1&auto=format&fit=crop&w=568&h=379&q=60&cs=tinysrgb&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D',
                'https://images.unsplash.com/photo-1425342605259-25d80e320565?dpr=1&auto=format&fit=crop&w=568&h=379&q=60&cs=tinysrgb&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D',
                'https://images.unsplash.com/photo-1425342605259-25d80e320565?dpr=1&auto=format&fit=crop&w=568&h=379&q=60&cs=tinysrgb&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D'
            ],
            current: 0,
            isNext: true,
        };

        this.handlerPrev = this.handlerPrev.bind(this);
        this.handlerNext = this.handlerNext.bind(this);
        this.goToHistoryClick = this.goToHistoryClick.bind(this);
    }

    handlerPrev() {
        let index = this.state.current,
            length = this.state.items.length;

        if (index < 1) {
            index = length;
        }

        index = index - 1;

        this.setState({
            current: index,
            isNext: false
        });
    }

    handlerNext() {
        let index = this.state.current,
            length = this.state.items.length - 1;

        if (index == length) {
            index = -1;
        }

        index = index + 1;

        this.setState({
            current: index,
            isNext: true
        });
    }

    goToHistoryClick(curIndex, index) {
        let next = (curIndex < index);
        this.setState({
            current: index,
            isNext: next
        });
    }

    render() {
        let index = this.state.current,
            isnext = this.state.isNext,
            src = this.state.items[index];

        return (
            <div className="appCarousel">
                <div className="carousel">
                    <CSSTransitionGroup
                        transitionName={{
                            enter: isnext ? 'enter-next' : 'enter-prev',
                            enterActive: 'enter-active',
                            leave: 'leave',
                            leaveActive: isnext ? 'leave-active-next' : 'leave-active-prev'
                        }}
                    >
                        <div className="carousel_slide" key={index}>
                            <img src={src} />
                        </div>
                    </CSSTransitionGroup>
                    <button className="carousel_control carousel_control__prev" onClick={this.handlerPrev}><span></span></button>
                    <button className="carousel_control carousel_control__next" onClick={this.handlerNext}><span></span></button>
                    <div className="carousel_history">
                        <History
                            current={this.state.current}
                            items={this.state.items}
                            changeSilde={this.goToHistoryClick}
                        />
                    </div>
                </div>
            </div>
        )
    }
}

class Devices extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            key: 'home',
            value: 0,
            name: ''
        };
    }


    handleChange = (event, value) => {
        this.setState({ value });
    };

    handleChangeEmail = name => event => {
        this.setState({
            [name]: event.target.value,
        });
    };

    render() {

        var conf = {
            chart: {
                type: 'spline'
            },
            // subtitle: {
            //     text: 'Source: WorldClimate.com'
            // },
            // xAxis: {
            //     categories:['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
            //         'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
            // }, 

            series: [{
                // name: 'Tokyo',
                // marker: {
                //     symbol: 'square'
                // },
                data: [0, 1.5, 0.8]

            },
                //  {
                //     name: 'London',
                //     marker: {
                //         symbol: 'diamond'
                //     },
                //     data: [{
                //         y: 3.9,
                //         marker: {
                //             symbol: 'url(https://www.highcharts.com/samples/graphics/snow.png)'
                //         }
                //     }, 4.2, 5.7, 8.5, 11.9, 15.2, 17.0, 16.6, 14.2, 10.3, 6.6, 4.8]
                // }
            ]
        };

        const handleOnDragStart = e => e.preventDefault()
        var items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
        const value = this.state;
        const classes = this.props;
        const { path } = this.props.match;
        var items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

        return (
            <div className="DevicesMain">
                {/* Devices Component */}
                {/* <Header /> */}

                <div className="container-fluid first_section">
                    <section className="pt-12 ContentWrapper padding_bottom_sm_0 py-sm-7">
                        <div className="container">
                            <div className="row row__flex align-items-center">
                                <div className="col-xs-12 col-sm-12 col-md-6 font_2">
                                    <h1 className="Title text_left h1 c-bw-1 mb-3 mb-sm-6 c_white"><span>Secure yourself today
with Sentinel</span></h1>
                                    <p className="Title text_left medium line_height Text mb-6 c-bw-12 c_white font_1">Sentinel is a multi-protocol network built on <span className="t_color">Tendermint</span>, where users can access provably secure and open-sourced dApps powered by Sentinel’s decentralized governance. </p>
                                    <div className="btn_sent font_1 text_left">
                                        <a className="Button Button--blue Button--block-xs text_left" href="" role="button" tabIndex="0"><span>Download dVPN</span></a>
                                    </div>
                                </div>
                                <div className="col-xs-12 col-sm-12 col-md-6 py-7 py-5">
                                    <img src={Video_img} alt="Desktop Client" title="Desktop Client" className="img-responsive img-width center-block" />
                                </div>

                            </div>
                            {/* <div className="data_consumed font_2">
                                    <h1 className="text-center font_weight_b text_blue_gradient">30000 GB</h1>
                                    <h4 className="c_white">Bandwidth consumed on Sentinel’s P2P dVPN in the last 24 hours (reset 12:00 UTC) </h4>
                                </div> */}
                        </div>

                    </section>
                </div>
                <div className=" DevicesHeadIcon">
                    <ul className='IconListItems'>
                        <li>
                            <div className="HeadMainDiv">
                                <h4 className="Content"> We've got your devices covered:</h4>
                                <p> Check our guide on how to use our apps.</p>
                            </div>
                        </li>
                        <li>
                            <button className="systemButton">
                                <span className="ImageSpanElement">
                                    <img src={WindowsIcon} className="ImageClass" />
                                </span>
                                <span className="IconTitle"> Windows </span>
                            </button>
                        </li>
                        <li>
                            <button className="systemButton" >
                                <span className="ImageSpanElement">
                                    <img src={LinuxIcon} className="ImageClass" />
                                </span>
                                <span className="IconTitle"> Linux </span>
                            </button>
                        </li>
                        <li>
                            <button className="systemButton" >
                                <span className="ImageSpanElement">
                                    <img src={MacIcon} className="ImageClass" />
                                </span>
                                <span className="IconTitle"> Mac </span>
                            </button>
                        </li>
                        <li>
                            <button className="systemButton" >
                                <span className="ImageSpanElement">
                                    <img src={iOSIcon} className="ImageClass" />
                                </span>
                                <span className="IconTitle"> iOS </span>
                            </button>
                        </li>
                        <li>
                            <button className="systemButton" >
                                <span className="ImageSpanElement">
                                    <img src={AndriodIcon} className="ImageClass" />
                                </span>
                                <span className="IconTitle"> Android </span>
                            </button>
                        </li>
                    </ul>
                </div>

                {/* Why VPN & dVPN  */}

                <div className="AboutVPNMainDiv">
                    <ul className="VPNUL">
                        <li className="VPNListItems">
                            <Card>
                                <div className="VPNCard">
                                    <div className="VPNDivdata">
                                        <h3> Why VPN? </h3>
                                        <span className="VPNcontent">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                                    </span>
                                    </div>
                                    {/* <div className="VPNGraphDiv">
                                                    <ReactHighcharts neverReflow={true} config={conf} style={{height: '100px'}}/>
                                                </div> */}
                                </div>
                            </Card>
                        </li>
                        <li className="VPNListItems">
                            <Card>
                                <div className="VPNCard">
                                    <div className="VPNDivdata">
                                        <h3> Why dVPN? </h3>
                                        <span className="VPNcontent">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                                    </span>
                                    </div>

                                </div>
                            </Card>
                        </li>
                        <li className="VPNListItems">
                            <Card>
                                <div className="VPNCard">
                                    <div className="VPNDivdata">
                                        <h3> Why Sentinel dVPN? </h3>
                                        <span className="VPNcontent">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                                    </span>
                                    </div>

                                </div>
                            </Card>
                        </li>
                    </ul>
                </div>

                {/* blockchain for sentinel dVPN Network Component */}
                <div className="dVPNNetworkComponent">
                    <div className="dVPNNetwrokInsideComponent">
                        <h3> Why blockchain for Sentinel dVPN Network?</h3>
                        <span className="dVPNNetworkcontent">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                        </p>
                        </span>
                    </div>


                    {/* <App /> */}
                    <div className="ImageGalleryDiv">
                        <SliderCenter />
                    </div>
                    {/* <Carousel items={items} active={0}/> */}
                    <span className='testimonial_1'><Testimonials /></span>
                    <span className='testimonial_2'><Testimonials_757px /></span>                          
                </div>
                <div className="StatsMainDiv">
                    <h2 className="StatsHead">  Stats </h2>
                    <div className="StatsGraphContent">

                        <div className="StatsDivInside">
                            <div className="GraphDiv">
                                {/* graph */}
                            </div>
                            <div className="StatsStatus">
                                <div className="SimpleCard LeftLine">
                                    <span className="StatsCount"> 15 </span>
                                    <span className="StatusName"> Active Nodes </span>
                                </div>
                                <div className="SimpleCard">
                                    <span className="StatsCount"> 233 </span>
                                    <span className="StatusName"> Active Sessions </span>
                                </div>
                            </div>
                        </div>

                        <div className="StatsDivInside">
                            <div className="GraphDiv">
                                {/* graph */}
                            </div>
                            <div className="StatsStatus ">
                                <div className="SimpleCard LeftLine">
                                    <span className="StatsCount"> 288.31 GB </span>
                                    <span className="StatusName"> Data Transferred (24Hr) </span>
                                </div>
                                <div className="SimpleCard">
                                    <span className="StatsCount"> 52.02 Min </span>
                                    <span className="StatusName"> Avg. Session Duration </span>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="NetworkStats">
                    <Button variant="outlined" className="NetworkStatsButton">
                        Live Network Stats
                                </Button>
                </div>

                <div className="NodeNetworkMain">
                    <h2> Node Network </h2>
                    <img src={LiveNodes} className='map_image' />
                    <div className="ButtonDiv"><Button variant="outlined" className="LiveNodesButton" > See Live Nodes </Button></div>
                </div>

                {/* Code Repo */}
                <div className="CodeRepoClass">
                    <h3 className="CodeRepoHead"> Code Repository </h3>
                    <div className="CardImaageClass">
                        <div className="CardsClass">
                            <div className="CardDiv">
                                <span className="CardCount"> 250 </span>
                                <span className="CardName"> Loreum Ipsum </span>
                            </div>
                            <div className="CardDiv">
                                <span className="CardCount"> 250 </span>
                                <span className="CardName"> Loreum Ipsum </span>
                            </div>
                            <div className="CardDiv">
                                <span className="CardCount"> 250 </span>
                                <span className="CardName"> Loreum Ipsum </span>
                            </div>
                            <div className="CardDiv">
                                <span className="CardCount"> 250 </span>
                                <span className="CardName"> Loreum Ipsum </span>
                            </div>

                        </div>
                        <div className="ImgClass">
                            <img src={repo} />
                        </div>
                    </div>
                    <Button variant="outlined" className="RepoButton" color="primary"> Check Repository </Button>
                </div>

                {/* Supperted protocols */}
                <div className="SupportedProtocols">
                    <h3 className="ProtocolsHead"> Supported Protocols </h3>
                    <p className="ProtocolPara"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  </p>
                    <div className="ProtocolsNetwork">
                        <div className="ProtocolDetails">
                            <div className="ProtocolsList">
                                <div className="Protocols"><img src={vector} /></div>
                                <span className="ProtocolsName"> P2P</span>
                            </div>
                            <div className="ProtocolsList">
                                <div className="Protocols"><img src={vector} /></div>
                                <span className="ProtocolsName"> Dedicated IP</span>
                            </div>
                            <div className="ProtocolsList">
                                <div className="Protocols"><img src={vector} /></div>
                                <span className="ProtocolsName"> Obfuscated <span className="ProtocolNameComingSoon">(Coming Soon)</span></span>
                            </div>
                            <div className="ProtocolsList">
                                <div className="Protocols"><img src={vector} /></div>
                                <span className="ProtocolsName"> Double VPN <span className="ProtocolNameComingSoon">(Coming Soon)</span></span>
                            </div>
                            <div className="ProtocolsList">
                                <div className="Protocols"><img src={vector} /></div>
                                <span className="ProtocolsName"> Onion Over VPN <span className="ProtocolNameComingSoon">(Coming Soon)</span></span>
                            </div>
                        </div>
                        <div className="NetworkDetails">
                            <ExpansionPanel className="ExpansionPanel">
                                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                                    <Typography className="HeadExpansionPanel">OpenVPN</Typography>
                                </ExpansionPanelSummary>
                                <ExpansionPanelDetails>
                                    <Typography>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                                        sit amet blandit leo lobortis eget.
                                                </Typography>
                                </ExpansionPanelDetails>
                            </ExpansionPanel>
                            <ExpansionPanel className="ExpansionPanel">
                                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                                    <Typography className="HeadExpansionPanel">SOCKS5</Typography>
                                </ExpansionPanelSummary>
                                <ExpansionPanelDetails>
                                    <Typography>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                                        sit amet blandit leo lobortis eget.
                                                </Typography>
                                </ExpansionPanelDetails>
                            </ExpansionPanel>
                            <ExpansionPanel className="ExpansionPanel">
                                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                                    <Typography className="HeadExpansionPanel">WireGuard</Typography>
                                </ExpansionPanelSummary>
                                <ExpansionPanelDetails>
                                    <Typography>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                                        sit amet blandit leo lobortis eget.
                                                </Typography>
                                </ExpansionPanelDetails>
                            </ExpansionPanel>
                        </div>
                    </div>
                </div>

                {/* platforms */}


                <div>
                    <div className="PlatformsMainDiv">
                        <div className='container padding_60px'>
                            <h2 className="PlatformHead"> Platforms </h2>
                            <p className="PlatformPara">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. </p>
                            <div className="PlatformsDiv">
                                <div>
                                    <Tabs>
                                        <TabList className="TabsList">
                                            <Tab><Link to={`${path}`} ><p>English</p></Link></Tab>
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

                {/* //Mailing section */}
                <div className='mailing_list'>
                    <div className='container text-center'>
                        <div className='mailing_img'>
                            <img src={mailingImg} alt='mailing'></img>
                        </div>
                        <p className='mb-0'>Sign up for our mailing list</p>
                        <p className='mb-0'>Stay tuned for the latest updates. Be the first to know when we launch mainnent</p>
                        <div className='sign_up_field'>
                            <TextField
                                id="outlined-name"
                                className='sign_up'
                                value={this.state.name}
                                onChange={this.handleChangeEmail('name')}
                                margin="normal"
                                variant="outlined"
                                placeholder='Email Address'
                            />
                            <a className="Button Button--blue Button--block-xs text_left view_git_button" href="" role="button"><span>Sign Up</span></a>
                        </div>
                    </div>
                </div>

                <div className='roadmap_lastSection'>
                    <div className='container'>
                        <div className='col-md-6 col-sm-12 left text-left'>
                            <p>Browse without border</p>
                            <div className="btn_sent font_1"><a className="Button Button--bblue Button--block-xs text_left" href="" role="button"><span>Get Sentinel dVPN</span></a></div>
                        </div>
                        <div className='col-md-5 col-sm-12 right'>
                            <div className='lastSection_checkMark'>
                                <Icon viewClass="check-white" icon="check-white" />
                                <p>Secure browsing</p>
                            </div>
                            <div className='lastSection_checkMark'>
                                <Icon viewClass="check-white" icon="check-white" />
                                <p>All platforms</p>
                            </div>
                            <div className='lastSection_checkMark'>
                                <Icon viewClass="check-white" icon="check-white" />
                                <p>Unlimited Access</p>
                            </div>
                            <div className='lastSection_checkMark'>
                                <Icon viewClass="check-white" icon="check-white" />
                                <p>Open source</p>
                            </div>
                        </div>
                    </div>
                </div>


                {/* <Footer /> */}
            </div>
        );
    }
}
export default (Devices);