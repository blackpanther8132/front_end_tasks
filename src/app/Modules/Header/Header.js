import React from "react";
import logo from '../../../assets/logo.svg';
import barrow from '../../../assets/blue_arrow.png';
import market_place from '../../../assets/market_place.png';
import validator from '../../../assets/validator.png';
import tendermint from '../../../assets/tendermint.png';
import service_node from '../../../assets/service_node.png';
import '../Header/styles/header.css';
import forward_arrow from '../../../assets/forward_arrow.svg';
import { NavLink } from 'react-router-dom';
import './styles/header.css';
import Icon from '../Shared/Icon';
import LangDropDown from './LangDropDown';
import { connect } from 'react-redux';
import language from '../Languages/index';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

class Header extends React.Component {
    state = {
        toggle: false
    }
    handleClick() {
    }
    navToggle() {
        this.setState({ toggle: !this.state.toggle });
    }
    render() {
        const { lang } = this.props;
        return (
            
            <div>
           
                <div className="status_bar">
                <div className="container">
                    <div className="status_content">
                    <p><span className="status_heading">Your IP:</span><span className="status_data"> 199.152.2.51 </span> 
                    <span className="status_dot"></span><span className="status_heading"> Your ISP:</span>
                    <span className="status_data"> ABC Media Pvt </span><span className="status_dot"></span> 
                    <span className="status_heading">Your Status:</span><span className="status_vul"> Vulnerable! </span> 
                    <span className="status_dot"></span> <span className="status_heading"> Download Sentinel dVPN  <img src={barrow} alt="download_arrow"/></span>
                    </p>
                    
                     </div>
                     <div className="status_social">
                     <ul className='social_icons_header'>
                                          <li>
                                                <a href="https://t.me/sentinelsecuritygroup" title="Official Telegram Group" target="_blank" rel="noopener noreferrer">
                                                    <Icon viewClass="telegram-plane social_icon_imgg" icon="telegram-plane" />
                                                </a>
                                            </li>
                                            <li>
                                                <a href="https://twitter.com/SentinelGroupio" title="Official Twitter Handle" target="_blank" rel="noopener noreferrer">
                                                    <Icon viewClass="twitter-logo social_icon_imgg" icon="twitter-logo" />
                                                </a>
                                            </li>
                                         
                                            <li>
                                                <a href="https://medium.com/sentinel" className="" alt="" title="" target="_blank" rel="noopener noreferrer">
                                                    <Icon viewClass="medium-m social_icon_imgg" icon="medium-m" />
                                                </a>
                                            </li>
                                            <li>
                                                <a href="https://medium.com/sentinel" className="" alt="" title="" target="_blank" rel="noopener noreferrer">
                                                    <Icon viewClass="medium-m social_icon_imgg" icon="medium-m" />
                                                </a>
                                            </li>
                                            <li>
                                                <a href="https://medium.com/sentinel" className="" alt="" title="" target="_blank" rel="noopener noreferrer">
                                                    <Icon viewClass="medium-m social_icon_imgg" icon="medium-m" />
                                                </a>
                                            </li>
                                        </ul>
                     </div>
                </div>
                </div>
                <header className="Header">
                    <nav className="Navigation">
                        <div className="container">
                            <div className="row justify_nav">
                                <div className="col-md-2 col-xs-6 sentinel_logo">
                                    <div className="logo">
                                        <a href="/">
                                            <img src={logo} className="img-responsive sentienl_logo" alt="" title="Sentinel Security Group" />
                                        </a>
                                    </div>
                                </div>
                                <div className="col-md-10 col-xs-12 main_nav_bar">
                                    <div className="navbar-collapse Navigation__body">
                                        <div className="HeaderMenu">
                                            <ul className="pull-sm-none pull-md-right pull-lg-right pull-xs-none justify-content-end listClass header_navlinks">
                                                <li>
                                                    <NavLink to={'/dVPN'} className="normal" activeClassName="active" >
                                                        {/* <a href="" role="menuitem" class="NavLink mb-0" data-title="dVPN"> */}
                                                        <span>{language[lang].dvpn}</span>
                                                        {/* </a> */}
                                                    </NavLink>
                                                </li>
                                                <li>
                                                    <NavLink to={'/dChat'} className="normal" activeClassName="active" >
                                                        {/* <a href="" role="menuitem" class="NavLink mb-0" data-title="dChat"> */}
                                                        <span>{language[lang].dchat}</span>
                                                        {/* </a> */}
                                                    </NavLink>
                                                </li>
                                                <li className="navmore" >
                                                    <NavLink to={'/network'} className="normal" activeClassName="active" >
                                                        {/* <a href="" role="menuitem" class="NavLink mb-0" data-title="Network"> */}
                                                        <span>{language[lang].network} {<ExpandMoreIcon />}</span>
                                                        {/* </a> */}
                                                    </NavLink>
                                                    <div className="hovercard">
                                                    <ul className="d-flex">
                                                    <li>
                                                        <div className='d-flex'>
                                                            <div className='icon_border'>
                                                            <img src={market_place} alt="icon_market_place"/>
                                                            </div>
                                                            <div>
                                                            <h3>Market Place</h3>
                                                            <p>Services (dApps) & Resources</p>
                                                            </div>
                                                        </div>
                                          
                                                         </li>
                                                         <li>
                                                         <div className='d-flex'>
                                                            <div className='icon_border'>
                                                            <img src={validator} alt="icon_validator"/>
                                                            </div>
                                                            <div>
                                                            <h3>Validator Network</h3>
                                                            <p>Services (dApps) & Resources</p>
                                                            </div>
                                                        </div>
                                                        </li>
                                                    </ul>
                                                    <ul className="d-flex">
                                                    <li>
                                                        <div className='d-flex'>
                                                            <div className='icon_border'>
                                                            <img src={tendermint} alt="icon_tendermint"/>
                                                            </div>
                                                            <div>
                                                            <h3>Tendermint</h3>
                                                            <p>Services (dApps) & Resources</p>
                                                           </div>
                                                        </div>
                                          
                                                         </li>
                                                         <li>
                                                         <div className='d-flex'>
                                                            <div className='icon_border'>
                                                            <img src={service_node} alt="icon_service_node"/>
                                                            </div>
                                                            <div>
                                                            <h3>Service Node Network</h3>
                                                            <p>Services (dApps) & Resources</p>
                                                            </div>
                                                        </div>
                                                        </li>
                                                    </ul>
                                                </div>
                                                
                                                </li>
                                               
                                                <li>
                                                    <NavLink to={'/Whitepaper'} className="normal" activeClassName="active" >
                                                        {/* <a href="" role="menuitem" class="NavLink mb-0" data-title="Whitepaper"> */}
                                                        <span>{language[lang].whitepaper}</span>
                                                        {/* </a> */}
                                                    </NavLink>
                                                </li>
                                                <li>
                                                    <NavLink to={'/Roadmap'} className="normal" activeClassName="active" >
                                                        {/* <a href="" role="menuitem" class="NavLink mb-0" data-title="Roadmap"> */}
                                                        <span>{language[lang].roadmap}</span>
                                                        {/* </a> */}
                                                    </NavLink>
                                                </li>
                                                <li>
                                                    <NavLink to={'/Downloads'} className="normal" activeClassName="active" >
                                                        {/* <a href="" role="menuitem" class="NavLink mb-0" data-title="Downloads"> */}
                                                        <span >{language[lang].downloads}</span>
                                                        {/* </a> */}
                                                    </NavLink>
                                                </li>
                                               
                                                <li className="line_li"><span className="line_nav"></span></li>
                                                <li className="flag_li pr-0">
                                                    <LangDropDown />
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className='mobile_nav'>
                                    <div className='burger_icon' onClick={() => this.navToggle()}>
                                        <Icon viewClass="" icon="menu-button-of-three-lines" />
                                    </div>
                                    {this.state.toggle ?
                                        < div className="navbar-collapse Navigation__body">
                                            <div className="HeaderMenu">
                                                <ul className="pull-sm-none pull-md-right pull-lg-right pull-xs-none justify-content-end listClass header_navlinks">
                                                    <li>
                                                        <NavLink to={'/dVPN'} className="normal" activeClassName="active" >
                                                            {/* <a href="" role="menuitem" class="NavLink mb-0" data-title="dVPN"> */}
                                                            <span>{language[lang].dvpn}</span>
                                                            {/* </a> */}
                                                        </NavLink>
                                                    </li>
                                                    <li>
                                                        <NavLink to={'/dChat'} className="normal" activeClassName="active" >
                                                            {/* <a href="" role="menuitem" class="NavLink mb-0" data-title="dChat"> */}
                                                            <span>{language[lang].dchat}</span>
                                                            {/* </a> */}
                                                        </NavLink>
                                                    </li>
                                                    <li>
                                                        <NavLink to={'/network'} className="normal" activeClassName="active" >
                                                            {/* <a href="" role="menuitem" class="NavLink mb-0" data-title="Network"> */}
                                                            <span>{language[lang].network}</span>
                                                            {/* </a> */}
                                                        </NavLink>
                                                    </li>
                                                    <li>
                                                        <NavLink to={'/Whitepaper'} className="normal" activeClassName="active" >
                                                            {/* <a href="" role="menuitem" class="NavLink mb-0" data-title="Whitepaper"> */}
                                                            <span>{language[lang].whitepaper}</span>
                                                            {/* </a> */}
                                                        </NavLink>
                                                    </li>
                                                    <li>
                                                        <NavLink to={'/Roadmap'} className="normal" activeClassName="active" >
                                                            {/* <a href="" role="menuitem" class="NavLink mb-0" data-title="Roadmap"> */}
                                                            <span>{language[lang].roadmap}</span>
                                                            {/* </a> */}
                                                        </NavLink>
                                                    </li>
                                                    <li>
                                                        <NavLink to={'/Downloads'} className="normal" activeClassName="active" >
                                                            {/* <a href="" role="menuitem" class="NavLink mb-0" data-title="Downloads"> */}
                                                            <span >{language[lang].downloads}</span>
                                                            {/* </a> */}
                                                        </NavLink>
                                                    </li>
                                                    {/* <li className='social_padding'>
                                                        <a href="https://twitter.com/Sentinel_co" alt="" className="" title="" target="_blank" rel="noopener noreferrer"><Icon viewClass="medium-m h_social_icons" icon="twitter-logo" /></a>
                                                    </li>
                                                    <li className='pl-0'>
                                                        <div onClick={this.handleClick.bind(this)} className="dropdown">
                                                            <a href="https://t.me/sentinel_co" alt="" className="dropbtn" title="" target="_blank" rel="noopener noreferrer"><Icon viewClass="medium-m h_social_icons" icon="telegram-plane" /></a>
                                                        </div>
                                                    </li>
                                                    <li className='pl-0'>
                                                        <a href="https://medium.com/sentinel" className="" alt="" title="" target="_blank" rel="noopener noreferrer"> <Icon viewClass="medium-m h_social_icons" icon="medium-m" /></a>
                                                    </li>
                                                    <li className="line_li"><span className="line_nav"></span></li>
                                                    <li className="flag_li pr-0">
                                                        <LangDropDown />
                                                    </li> */}
                                                </ul>
                                            </div>
                                        </div> : ''
                                    }
                                </div>
                            </div>
                        </div>
                    </nav>
                </header>

            </div >
        );
    }

}

const mapStateToProps = state => {
    return {
        lang: state.language
    }
};

export default (connect(mapStateToProps, null, undefined, { pure: false })(Header));