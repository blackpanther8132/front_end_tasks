import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../MainApp/styles/style.css';
import Rectangle from '../../../assets/Rectangle.png';
// import coindesk_press from '../../../assets/coindesk_press.svg';
// import cointelegraph_press from '../../../assets/cointelegraph_press.svg';
// import Secure_storage from '../../../assets/Secure_storage.svg';
// import dApp_sheild from '../../../assets/dApp_sheild.svg';
// import problems_we_solve from '../../../assets/problems_we_solve.svg';
// import Group_4 from '../../../assets/Group_4.png';
// import Group_dvpn from '../../../assets/Group_dvpn.png';
// import aa from '../../../assets/aa.png';
// import Icon from '../Shared/Icon';
import tendermint from '../../../assets/tendermintstack.png'
import { Avatar, Button, Typography } from '@material-ui/core';
import './network.css';
import '../Roadmap/roadmap.css';
import mailingImg from '../../../assets/mailing_list.png';
import TextField from '@material-ui/core/TextField';

// Platforms
import { BrowserRouter, Route, Link } from "react-router-dom"
import { Tabs, TabList, TabPanel, Tab } from "react-tabs"
import WindowsIcon from '../../../assets/SystemIcon/Group.png';
import LinuxIcon from '../../../assets/SystemIcon/linux.png';
import iOSIcon from '../../../assets/SystemIcon/ios.png';
import MacIcon from '../../../assets/SystemIcon/mac.png'
import AndriodIcon from '../../../assets/SystemIcon/android.png';
import CustomScroll from './components/customScroll';
import classNames from 'classnames';
import Scroll from './scroll';
import Icon from '../Shared/Icon';
import language from '../Languages/index';

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

class Network extends Component {
    state = {
        name: ''
    }

    handleChange = name => event => {
        this.setState({
            [name]: event.target.value,
        });
    };
    render() {
        const { path } = this.props.match;
        const { lang } = this.props;

        return (
            <div className="Main_section">
                <div className="network">
                    <div className="container-fluid network_firstsection pl-0">
                        <div className="row row__flex align-items-center row_first pt-0">
                            <div className="row align-items-center roadmap_section1 w-100 m-0">
                                <div className="container">
                                    <div className="row row__flex align-items-center row_second margin-left_xs_10">
                                        <div className='sentinel_roadmap col-md-6 text-left'>
                                            <p>
                                                Sentinel Network
                                        </p>
                                            <p>
                                                Most reliable network
                                        </p>
                                        </div>
                                        <div className="btn_sent font_1 text-right col-md-6 view_git_button_div">
                                            <a className="Button Button--blue Button--block-xs text_left view_git_button" href="" role="button"><span>View Git</span></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="container">
                                <div className="row row__flex align-items-center row_second">
                                    <h1 className="bottom_line_head">Market Place</h1>
                                    <p className="para_des">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
                                    <CustomScroll />
                                    <div className="pad_div"></div>
                                    <div className="container">
                                        <h3 className="text_left head_color_1">Resources</h3>
                                        <div className="row row__flex align-items-center">
                                            <div className="col-sm-4 img_resources">

                                                <img src={Rectangle} alt="" title="" className="img-responsive" />
                                            </div>

                                            <div className="col-sm-4 img_resources">

                                                <img src={Rectangle} alt="" title="" className="img-responsive" />
                                            </div>

                                            <div className="col-sm-4 img_resources">

                                                <img src={Rectangle} alt="" title="" className="img-responsive" />
                                            </div>
                                            <div className="col-sm-12 align-items-center py-5">
                                                <div class="btn_sent font_1"><a class="Button Button--grad Button--block-xs text_left" href="" role="button" tabindex="0"><span>Live Network Stats</span></a></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                    {/* second section tendermint */}
                    <div className="second_section">
                        <h3 className="second_section_header">{language[lang].tendermint}</h3>
                        <div className="section_section_container">
                            <div className="row row__flex align-items-center systemsectionright">
                                <div className="col-sm-6 LeftContentSecondSection">
                                    <h4>{language[lang].tendermint_heading1}</h4>
                                    <p>{language[lang].tendermint_content1}</p>
                                    <Button variant="outlined" className="CheckStatsButton"> Check Stats</Button>
                                </div>
                                <div className="col-sm-6 containerImg">
                                    <img src={tendermint} />
                                </div>
                            </div>
                        </div>
                        <div className="">
                            <div className="row row__flex align-items-center systemsectionleft">
                                <div className="col-sm-6 containerImg">
                                    <img src={tendermint} />
                                </div>
                                <div className="col-sm-6 LeftContentSecondSection bottomContainer">
                                    <h4>{language[lang].tendermint_heading2}</h4>
                                    <p>{language[lang].tendermint_content2}</p>
                                    <Button variant="outlined" className="CheckStatsButton"> Check Stats</Button>
                                </div>

                            </div>
                        </div>
                        <div className="section_section_container">
                            <div className="row row__flex align-items-center systemsectionright">
                                <div className="col-sm-6 LeftContentSecondSection">
                                    <h4>{language[lang].tendermint_heading3}</h4>
                                    <p>{language[lang].tendermint_content3_1}</p>
                                    <p>{language[lang].tendermint_content3_2}</p>
                                    <Button variant="outlined" className="CheckStatsButton"> Check Stats</Button>
                                </div>
                                <div className="col-sm-6 containerImg">
                                    <img src={tendermint} />
                                </div>
                            </div>
                        </div>
                    </div>


                    {/* Third section */}
                    <div className="third_section">
                        <h4 className="third_section_header">{language[lang].validator_network}</h4>
                        <div className="section_section_container container">
                            <div className="row row__flex align-items-center frstcontainerSecondsection">

                                <div className="col-sm-6 containerBox">
                                    <div className="IMgBox"> </div>
                                </div>
                                <div className="col-sm-6 validatorContent">
                                    <div className="Head_Content_Class">
                                        <h4>{language[lang].hub_zones}</h4>
                                        <p>{language[lang].hub_zones_content1}</p>
                                        <p>{language[lang].hub_zones_content2}</p>
                                        <p>{language[lang].hub_zones_content3}</p>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="section_section_container container">
                            <div className="row row__flex align-items-center frstcontainerSecondsection">

                                <div className="col-sm-6  validatorContent ">
                                    <div className="Head_Content_Class">
                                        <h4>Governance powered by the Sentinel Validator Network</h4>
                                        <p>Validators within the network validate transactions based on the tokens they stake and that are delegated to them.</p>
                                        <p>Validators are specific to the Sentinel Hub and enable the governance of the entire network. Validators of Zones secure the chain dedicated to the functioning of the Zone and communication between chains happens through Cosmos Network’s IBC</p>
                                    </div>
                                </div>
                                <div className="col-sm-6 containerBox">
                                    <div className="IMgBox"> </div>

                                </div>

                            </div>
                        </div>
                        <div className="section_section_container container">
                            <div className="row row__flex align-items-center frstcontainerSecondsection">

                                <div className="col-sm-6 containerBox">
                                    <div className="IMgBox"> </div>
                                </div>
                                <div className="col-sm-6 validatorContent">
                                    <div className="Head_Content_Class">
                                        <h4>{language[lang].service_node_network}</h4>
                                        <p>{language[lang].service_node_network_content1}</p>
                                        <p>{language[lang].service_node_network_content2}</p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

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

                    {/* mailing list section */}

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
                                    onChange={this.handleChange('name')}
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
                </div >
            </div >
        );
    }
}

const mapStateToProps = state => {
    return {
        lang: state.language
    }
}

export default connect(
    mapStateToProps
)(Network);