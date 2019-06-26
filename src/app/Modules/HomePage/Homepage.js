import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Homepage.css';
import Video_img from '../../../assets/video_bg.png'
import Group from '../../../assets/Group.svg'
import Group1 from '../../../assets/Group1.svg'
import Group2 from '../../../assets/Group2.svg'
import download from '../../../assets/download.png'
import warrow from '../../../assets/white_arrow.png'
import varrow from '../../../assets/voilet_arrow.png'
import icon1 from '../../../assets/section8_icon1.svg'
import icon2 from '../../../assets/section8_icon2.svg'
import icon3 from '../../../assets/section8_icon3.svg'
import section8_side2 from '../../../assets/section8_side2.png'
import coindesk_press from '../../../assets/coindesk_press.svg';
import cointelegraph_press from '../../../assets/cointelegraph_press.svg';
import Secure_storage from '../../../assets/Secure_storage.svg';
import dApp_sheild from '../../../assets/dApp_sheild.svg';
import problems_we_solve from '../../../assets/problems_we_solve.svg';
// import Group_4 from '../../../assets/Group_4.png';
import Group_dvpn from '../../../assets/Group_dvpn.png';
import aa from '../../../assets/aa.png';
import Icon from '../Shared/Icon';
import blog1 from '../../../assets/blog1.png';
import ModalVideo from 'react-modal-video'
import './styles.css';
import playIcon from '../../../assets/SystemIcon/playIcon.png';
import map from '../../../assets/map.png';
import military_grade from '../../../assets/military_grade.png';
import complete_transparency from '../../../assets/complete_transparency.png';

class MainApp extends Component {
    constructor() {
        super()
        this.state = {
            isOpen: false
        }
        this.openModal = this.openModal.bind(this)
    }
    openModal() {
        this.setState({ isOpen: true })
    }

    render() {
        return (
            <div className="Main_section">
                <div className="">
                    <div className="container-fluid first_section">
                        <section className="pt-12 ContentWrapper py-sm-7">
                            <div className="container">
                                <div className="row row__flex align-items-center section_first_div">
                                    <div className="col-xs-12 col-sm-12 col-md-6 font_2">
                                        <h1 className="title"><span>Secure yourself today
with Sentinel</span></h1>
                                        <p className="Title text_left medium line_height Text mb-6 c-bw-12 c_white font_1">Sentinel dVPN, a decentralized VPN, is the first dApp on the Sentinel network. <a href="" className="secure_knowmore">Know more..</a></p>
                                        <div className="secure_data">
                                        <h1>33000 GB <span class="secure_ln"></span></h1>
                                        </div>
                                        <div className="secure_content">
                                            <p>Bandwidth consumed on Sentinel’s P2P dVPN in the last 24 hours (reset 12:00 UTC) </p>
                                        </div>
                                        <br/>
                                        <div className="secure_downloadbtn">                                   
                                         <div className="btn_sent font_1 text_left">
                                            <a className="Button Button--blue Button--block-xs text_left" href="" role="button" tabIndex="0">
                                               <span><img src={download} alt="icon_download"/></span> <span>Download Sentinel dVPN</span></a>
                                        </div>
                                        </div>   
                                    </div>
                                    <div className="col-xs-12 col-sm-12 col-md-6">
                                        <img src={Video_img} alt="Desktop Client" title="Desktop Client" className="img-responsive img-width center-block" />
                                        <img src={playIcon} alt='Play Icon' onClick={this.openModal} className='play_icon' />
                                        <ModalVideo channel='youtube' isOpen={this.state.isOpen} videoId='L61p2uyiMSo' onClose={() => this.setState({ isOpen: false })} />
                                    </div>

                           
                                </div>
                                </div>

                        </section>
                    </div>


                    <div className="listof_press_releases">
                        <ul className="listof_release">
                            <li><a href="#" target="_blank"><img src={cointelegraph_press} alt="coindesk" className="img-responsive" /> </a></li>
                            <li><a href="#" target="_blank"><img src={coindesk_press} alt="coindesk" className="img-responsive" /> </a></li>
                        </ul>
                    </div>
                    <section className="info_section">
                        <div className="container">
                        <div className="sentinal_info">
                            <h2 className="sentinal_info_title"><span>Why Sentinal?</span></h2>
                                    <ul className="tiles">
                                        <li>
                                            <div className="">
                                                <img src={Group1} alt="" className="img-responsive img_center"/>
                                                <h3 className="military txt_color" ><span>Military Grade Encryption</span></h3>
                                                <p className="txt_color"><span>Users can choose from SOCKS5 or OpenVPN servers which enforce quantum level
                                                     encryption standards such as AES 256 or Poly1305.</span></p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="">
                                                <img src={Group} alt="" className="img-responsive img_center"/>
                                                <h3 className="military txt_color" ><span>Absolute Transparency </span></h3>
                                                <p className="txt_color"><span>The code behind the Sentinel dVPN is fully revealed
                                                     to the public on Sentinel’s GitHub profile along with the application MD5 Checksums for absolute provability. </span></p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="">
                                                <img src={Group2} alt="" className="img-responsive img_center"/>
                                                <h3 className="military txt_color" ><span>Servers across the Globe</span></h3>
                                                <p className="txt_color"><span>Servers are hosted all over the world by the community, for the community. 
                                                    Users can choose the optimal server for the fastest browsing and download speeds. .</span></p>
                                            </div>
                                        </li>

                                    </ul>

                                </div>
                        </div>
                    </section>
                    <section className="section_3 text_descriptijon">
                        <div className="container">
                        <ul className="tiles">
                            <li className="first_bubble">
                            <div className="talk-bubble tri-right btm-right">
                            <div className="profile-pic">
                            </div>
                            <div className="talktext">
                            <h2>John Doe</h2>
                            <h6>CEO, Founder</h6>
                            </div>
                            </div>
                            </li>
                            <li className="second_bubble">
                            <div className="talk-bubble tri-right btm-left">
                            <div className="profile-pic">
                            </div>
                            <div className="talktext">
                            <h2>John Doe</h2>
                            <h6>CEO, Founder</h6>
                            </div>
                            </div>
                            </li>
                        </ul>
                        <div className="dot"></div>
                            <div className="icard card-3">
                                <h6 className="des_flow font_2">The Sentinel Network hosts open-source distributed and decentralized applications that provide users with assurance that their session information is not being logged, their communication is not being stored, and that not even the creator of the application can view any of their data.</h6>
                            </div>
                        </div>
                    </section>
                    
               
                    {/* <section className="section_8">
                        <div className="head_3">
                            <h1>Lorem Ipsum dolar set</h1>
                            <h6>Are you concerned about who can see your internet activity and personal interactions?</h6>
                        </div>
                        <div className="container">
                            <div className="row">
                                <div className="col-md-6 col-sm-12 col-xs-12 blog_container">
                                    <ul>
                                        <li>
                                        <div className='d-flex'>
                                            <div className='icon_border'>
                                            <img src={icon1} alt="icon_vpn"/>
                                            </div>
                                            <div>
                                            <p>Can your favorite VPN prove that it’s not logging your 
                                                usage information or that all VPN nodes are maintaining
                                                 a high degree of encryption?</p>
                                            </div>
                                        </div>
                                          
                                        </li>
                                        <li>
                                        <div className='d-flex'>
                                            <div className='icon_border'>
                                            <img src={icon2} alt="icon_vpn2"/>
                                            </div>
                                            <div>
                                            <p>Can your favorite VPN prove that it’s not logging your 
                                                usage information or that all VPN nodes are maintaining
                                                 a high degree of encryption?</p>
                                            </div>
                                        </div>
                                          
                                        </li>
                                        <li>
                                        <div className='d-flex'>
                                            <div className='icon_border'>
                                            <img src={icon3} alt="icon_vpn3"/>
                                            </div>
                                            <div>
                                            <p>Can your favorite VPN prove that it’s not logging your 
                                                usage information or that all VPN nodes are maintaining
                                                 a high degree of encryption?</p>
                                            </div>
                                        </div>
                                          
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-md-6  col-sm-12 col-xs-12 side2">
                                    <img src={section8_side2} alt="" title="" className="img-responsive img_width " />
                                   
                                </div>
                            </div>
                        </div>
                    </section> */}
                    <section className="section_6">
                        <div className="container">
                            <div className="row row__flex">
                                <div className="col-xs-12 col-sm-12 col-md-6 mb-sm-5 mb-md-0 check_stats">
                                    <h1 className="Title text_left h1 c-bw-1 mb-3 mb-sm-6 c_white"><span>dApps that have real utility</span></h1>
                                    <p className="Title text_left medium line_height Text mb-6 c-bw-12 c_white font_1">Live transparent stats indicating the actual usage
                                         of the Sentinel<span className="sbdvpn "> dVPN </span>network which is utilized by thousands of unique users everyday.</p>
                                    <div className="btn_sent font_1 text_left">
                                        <a className="Button--bblue Button--grad text_left" href="" role="button" tabIndex="0"><span>Check Stats</span></a>
                                    </div>
                                </div>
                                <div className="col-xs-12 col-sm-12 col-md-6">
                                    <div className="row row__flex numbers_flex">
                                        <div className="col-xs-12 col-sm-4 offset-sm-2 pb-sm-3 font_2">
                                            <h1 className="count_num text_left">663</h1>
                                            <h6 className="name_count text_left">Active Sessions</h6>
                                        </div>
                                        <div className="col-xs-12 col-sm-6 pb-sm-3 font_2">
                                            <h1 className="count_num text_left">663</h1>
                                            <h6 className="name_count text_left">Avg. Session Duration (24Hr)</h6>
                                        </div>
                                        <div className="col-xs-12 col-sm-4 offset-sm-2 py-sm-3 font_2">
                                            <h1 className="count_num text_left">663</h1>
                                            <h6 className="name_count text_left">Active Nodes</h6>
                                        </div>
                                        <div className="col-xs-12 col-sm-6 font_2 py-sm-3">
                                            <h1 className="count_num text_left">663</h1>
                                            <h6 className="name_count text_left">Total Data Consumed</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </section>
                    <section className="section_7">
                     <div className="head_3">
                            <h1>Incentive Program</h1>
                            <h6>How can you get rewarded by supporting the Sentinel Network?</h6>
                        </div>
                        <div className="container">
                            <div className="row">
                                <div className="col-sm-6 blog_container side1">
                                        <div class="wrapper">
                                        <div class="profile-pic">
                                        </div>
                                        <h2>Be A Node</h2>
                                        <p>Run a node for the dVPN or dChat Network, contribute bandwidth , 
                                        earn reputation and receive the ability to be a Validator.</p>
                                        <div className="btn_sent font_1 text_left">
                                        <a className="Button--bblue Button--grad text_left" href="" role="button" tabIndex="0"><span> Learn more <img src={warrow} alt="icon_white_arrow"/></span></a>
                                        </div>
                                        </div>                             
                                </div>
                                <div className="col-sm-6 side2">
                                <div class="wrapper">
                                        <div class="profile-pic">
                                        </div>
                                        <h2>Be A Node</h2>
                                        <p>Run a node for the dVPN or dChat Network, contribute bandwidth , 
                                        earn reputation and receive the ability to be a Validator.</p>
                                        <div className="btn_sent font_1 text_left">
                                        <a className="text_left" href="" role="button" tabIndex="0"><span> Learn more  <img src={varrow} alt="icon_blue_arrow"/></span></a>
                                        </div>
                                        </div>   
                                </div>
                            </div>
                        </div>
                    </section>
               
                </div>
            </div>
        );
    }
}
export default connect(

)(MainApp);