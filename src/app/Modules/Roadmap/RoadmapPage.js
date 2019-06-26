import React, { Component } from 'react';
import { connect } from 'react-redux';
import Icon from '../Shared/Icon';
import WindowsIcon from '../../../assets/SystemIcon/Group.png';
import LinuxIcon from '../../../assets/SystemIcon/linux.png';
import iOSIcon from '../../../assets/SystemIcon/ios.png';
import MacIcon from '../../../assets/SystemIcon/mac.png'
import AndriodIcon from '../../../assets/SystemIcon/android.png'
import mailingImg from '../../../assets/mailing_list.png';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Route, Link } from "react-router-dom";
import { Tabs, TabList, TabPanel, Tab } from "react-tabs";
import './roadmap.css';
import language from '../Languages/index';

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

class Roadmap extends Component {
    state = {
        show: false,
        name: '',
        mileStone: [
            {
                'mile_stone_name': language[this.props.lang].mile_stone1,
                'details': language[this.props.lang].details,
                'show': false,
                'details_data': language[this.props.lang].details_data1,
                'date': language[this.props.lang].date1,
                'network': language[this.props.lang].dvpn,
                'git': language[this.props.lang].view_on_git,
            },
            {
                'mile_stone_name': language[this.props.lang].mile_stone2,
                'details': language[this.props.lang].details,
                'show': false,
                'details_data': language[this.props.lang].details_data1,
                'date': language[this.props.lang].date1,
                'network': language[this.props.lang].dvpn,
                'git': language[this.props.lang].view_on_git,
            },
            {
                'mile_stone_name': language[this.props.lang].mile_stone3,
                'details': language[this.props.lang].details,
                'show': false,
                'details_data': language[this.props.lang].details_data1,
                'date': language[this.props.lang].date1,
                'network': language[this.props.lang].dvpn,
                'git': language[this.props.lang].view_on_git,
            },
            {
                'mile_stone_name': language[this.props.lang].mile_stone4,
                'details': language[this.props.lang].details,
                'show': false,
                'details_data': language[this.props.lang].details_data1,
                'date': language[this.props.lang].date1,
                'network': language[this.props.lang].dvpn,
                'git': language[this.props.lang].view_on_git,
            },
        ],
        futureMilestone: [
            {
                'mile_stone_name': language[this.props.lang].mile_stone5,
                'details': language[this.props.lang].details,
                'show': false,
                'details_data': language[this.props.lang].details_data1,
                'date': language[this.props.lang].n_a,
                'network': language[this.props.lang].dvpn,
                'git': language[this.props.lang].n_a,
            },
            {
                'mile_stone_name': language[this.props.lang].mile_stone6,
                'details': language[this.props.lang].details,
                'show': false,
                'details_data': language[this.props.lang].details_data1,
                'date': language[this.props.lang].n_a,
                'network': language[this.props.lang].dvpn,
                'git': language[this.props.lang].n_a,
            }
        ]
    }

    detailsHandler = (index) => {
        let mileSToneCopy = JSON.parse(JSON.stringify(this.state.mileStone));
        mileSToneCopy.map(data => {
            if (mileSToneCopy.indexOf(data) !== index) {
                data.show = false;
            }
            return null;
        })
        mileSToneCopy[index].show = !mileSToneCopy[index].show;
        this.setState({ mileStone: mileSToneCopy });
    }

    detailsHandlerFutureMilestones = (index) => {
        let mileSToneCopy = JSON.parse(JSON.stringify(this.state.futureMilestone));
        mileSToneCopy.map(data => {
            if (mileSToneCopy.indexOf(data) !== index) {
                data.show = false;
            }
            return null;
        })
        mileSToneCopy[index].show = !mileSToneCopy[index].show;
        this.setState({ futureMilestone: mileSToneCopy });
    }

    handleChange = name => event => {
        this.setState({
            [name]: event.target.value,
        });
    };

    render() {
        const { classes, lang } = this.props;
        const { path } = this.props.match;
        const Home = () => (
            <div>
                <ul className='IconListItemsPlatform'>
                    <li>
                        <button className="systemButton first_button">
                            <span className="ImageSpanElement">
                                <img src={WindowsIcon} alt='windows' className="ImageClass" />
                            </span>
                            <span className="IconTitle"> {language[lang].windows} </span>
                        </button>
                    </li>
                    <li>
                        <button className="systemButton" >
                            <span className="ImageSpanElement">
                                <img src={LinuxIcon} alt='linux' className="ImageClass" />
                            </span>
                            <span className="IconTitle"> {language[lang].linux} </span>
                        </button>
                    </li>
                    <li>
                        <button className="systemButton" >
                            <span className="ImageSpanElement">
                                <img src={MacIcon} alt='mac' className="ImageClass" />
                            </span>
                            <span className="IconTitle"> {language[lang].mac} </span>
                        </button>
                    </li>
                    <li>
                        <button className="systemButton" >
                            <span className="ImageSpanElement">
                                <img src={iOSIcon} alt='ios' className="ImageClass" />
                            </span>
                            <span className="IconTitle"> {language[lang].ios} </span>
                        </button>
                    </li>
                    <li>
                        <button className="systemButton last_button" >
                            <span className="ImageSpanElement">
                                <img src={AndriodIcon} alt='andriod' className="ImageClass" />
                            </span>
                            <span className="IconTitle"> {language[lang].android} </span>
                        </button>
                    </li>
                </ul>
            </div>
        )
        return (
            <div className="Main_section">
                <div className="roadmap">
                    <div className="container-fluid network_firstsection">
                        <div className="row align-items-center roadmap_section1">
                            <div className="container">
                                <div className="row row__flex align-items-center row_second">
                                    <div className='sentinel_roadmap col-md-6 text-left'>
                                        <p>
                                            {language[lang].sentinel_roadmap}
                                        </p>
                                        <p>
                                            {language[lang].active_git_repository}
                                        </p>
                                    </div>
                                    <div className="btn_sent font_1 text-right col-md-6 view_git_button_div">
                                        <a className="Button Button--blue Button--block-xs text_left view_git_button" href="" role="button"><span>{language[lang].view_git}</span></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div >
                <div className='roadmap_steps'>
                    <div className="container">
                        <div className='header'>
                            <p className='col-6'>{language[lang].mile_stone}</p>
                            <p className='col-2'>{language[lang].date}</p>
                            <p className='col-2'>{language[lang].network}</p>
                            <p className='col-2'>{language[lang].git}</p>
                        </div>
                        {this.state.mileStone.map((data, index) => {
                            return (
                                <span key={index}>
                                    <div className={this.state.mileStone[index].show ? 'step_box step_box_details' : 'step_box'}>
                                        <div className='col-6 mile_stone'>
                                            <div className='check_button'>
                                                <Icon viewClass="check" icon="check" />
                                            </div>
                                            <p>{data.mile_stone_name}</p>
                                            <div className='view_details' onClick={() => this.detailsHandler(index)}>
                                                <p>{data.details}</p>
                                                {this.state.mileStone[index].show ? (
                                                    <div>
                                                        <Icon viewClass="down_arrow" icon="down_arrow" />
                                                    </div>
                                                ) : ''}
                                            </div>
                                        </div>
                                        <div className='col-2 date'>{data.date}</div>
                                        <div className='col-2 network'>{data.network}</div>
                                        <div className='col-2 git'>{data.git}</div>
                                    </div>
                                    {
                                        this.state.mileStone[index].show ? (
                                            <div className='step_box_details_show'>
                                                <p>
                                                    {data.details_data}
                                                </p>
                                            </div>
                                        ) : ''
                                    }
                                </span>
                            )
                        })}
                    </div>
                </div>
                <div className='roadmap_steps mb-150px'>
                    <div className="container background_02061F">
                        <div className='header'>
                            <p>Future Milestones</p>
                        </div>
                        {this.state.futureMilestone.map((data, index) => {
                            return (
                                <span key={index}>
                                    <div className={this.state.futureMilestone[index].show ? 'step_box step_box_details' : 'step_box'}>
                                        <div className='col-6 mile_stone'>
                                            <div className='check_button'>
                                                <Icon viewClass="time" icon="time" />
                                            </div>
                                            <p>{data.mile_stone_name}</p>
                                            <div className='view_details' onClick={() => this.detailsHandlerFutureMilestones(index)}>
                                                <p>{data.details}</p>
                                                {this.state.futureMilestone[index].show ? (
                                                    <div>
                                                        <Icon viewClass="down_arrow" icon="down_arrow" />
                                                    </div>
                                                ) : ''}
                                            </div>
                                        </div>
                                        <div className='col-2 date'>{data.date}</div>
                                        <div className='col-2 network'>{data.network}</div>
                                        <div className='col-2 date'>{data.git}</div>
                                    </div>
                                    {
                                        this.state.futureMilestone[index].show ? (
                                            <div className='step_box_details_show'>
                                                <p>
                                                    {data.details_data}
                                                </p>
                                            </div>
                                        ) : ''
                                    }
                                </span>
                            )
                        })}
                    </div>
                </div>
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
                                className={classNames(classes.textField, 'sign_up')}
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
        );
    }
}

const mapStateToProps = state => {
    return {
        lang: state.language
    }
}

export default withStyles(styles)(connect(mapStateToProps)(Roadmap));