import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../MainApp/styles/style.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Video_img from '../../../assets/video_bg.png';
import coindesk_press from '../../../assets/coindesk_press.svg';
import cointelegraph_press from '../../../assets/cointelegraph_press.svg';
import Secure_storage from '../../../assets/Secure_storage.svg';
import dApp_sheild from '../../../assets/dApp_sheild.svg';
import problems_we_solve from '../../../assets/problems_we_solve.svg';
import Group_4 from '../../../assets/Group_4.png';
import Group_dvpn from '../../../assets/Group_dvpn.png';
import aa from '../../../assets/aa.png';
import Icon from '../Shared/Icon';

class MainApp extends Component {
    render() {
        return (
            <div className="Main_section">
                <div className="">
                    <Header />
                    <div className="container-fluid first_section">
                        <section className="pt-12 ContentWrapper py-sm-7">
                            <div className="container">
                                <div className="row row__flex align-items-center">
                                    <div className="col-xs-12 col-sm-5 font_2">
                                        <h1 class="Title text_left h1 c-bw-1 mb-3 mb-sm-6 c_white"><span>Be secure with dApps built on Sentinel</span></h1>
                                        <p className="Title text_left medium line_height Text mb-6 c-bw-12 c_white font_1">Sentinel is a multi-protocol network built on <span className="t_color">Tendermint</span>, where users can access provably secure and open-sourced dApps powered by Sentinel’s decentralized governance. </p>
                                        <div className="btn_sent font_1 text_left">
                                            <a class="Button Button--blue Button--block-xs text_left" href="" role="button" tabindex="0"><span>Download dVPN</span></a>
                                        </div>
                                    </div>
                                    <div className="col-xs-12 col-sm-7 py-7 py-sm-5">
                                        <img src={Video_img} alt="Desktop Client" title="Desktop Client" className="img-responsive img-width center-block" />
                                    </div>

                                </div>
                                <div className="data_consumed font_2">
                                    <h1 className="text-center font_weight_b text_blue_gradient">30000 GB</h1>
                                    <h4 className="c_white">Bandwidth consumed on Sentinel’s P2P dVPN in the last 24 hours (reset 12:00 UTC) </h4>
                                </div>
                            </div>

                        </section>
                    </div>
                    <div className="listof_press_releases">
                        <ul className="listof_release">
                            <li><a href="#" target="_blank"><img src={cointelegraph_press} alt="coindesk" class="img-responsive" /> </a></li>
                            <li><a href="#" target="_blank"><img src={coindesk_press} alt="coindesk" class="img-responsive" /> </a></li>
                        </ul>
                    </div>
                    <section className="section_2">
                        <div className="head_2">
                            <h1>Problems we solve</h1>
                        </div>
                        <div className="container">
                            <div className="row row__flex align-items-center">
                                <div className="col-xs-12 col-sm-6">
                                    <ul class="list-group list_1">
                                        <li class="list-group-item">
                                            <div className="row align-items-center">
                                                <div className="img_section col-xs-12 col-sm-2">
                                                    <img src={Secure_storage} alt="" title="" /> </div>
                                                <div className="col-sm-10"><h6 className="text_left font_1 list_text">Can your favorite VPN prove that it’s not logging your usage information or that all VPN nodes are maintaining a high degree of encryption?  </h6></div></div>
                                        </li>
                                        <li class="list-group-item">
                                            <div className="row align-items-center">
                                                <div className="img_section col-xs-12 col-sm-2">
                                                    <img src={Secure_storage} alt="" title="" /> </div>
                                                <div className="col-sm-10"><h6 className="text_left font_1 list_text">Can the chat application that you depend on daily prove that it’s not storing all of your messages and sending them to a third party?   </h6></div></div>
                                        </li>
                                        <li class="list-group-item">
                                            <div className="row align-items-center">
                                                <div className="img_section col-xs-12 col-sm-2">
                                                    <img src={dApp_sheild} alt="" title="" /> </div>
                                                <div className="col-sm-10"><h6 className="text_left font_1 list_text">Can any application that claims to generate a ‘private key’ to encrypt your data prove that it doesn’t have the ability to store the key and access your data?</h6></div></div>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-xs-12 col-sm-6 aside_bg">
                                    <img src={problems_we_solve} alt="dApp_sheild" title="dApp_sheild" />
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="section_3 text_descriptijon">
                        <div className="container">
                            <div className="icard card-3">
                                <h6 className="des_flow font_2">The Sentinel Network hosts open-source distributed and decentralized applications that provide users with assurance that their session information is not being logged, their communication is not being stored, and that not even the creator of the application can view any of their data.</h6>
                            </div>
                        </div>
                    </section>
                    <section className="section_4">
                        <div className="container">
                            <div className="row row__flex align-items-center">
                                <div className="col-xs-12 col-sm-6">
                                    <img src={Group_4} className="img-responsive img_width" alt="dApp_sheild" title="dApp_sheild" />
                                </div>
                                <div className="col-xs-12 col-sm-6">
                                    <h2 class="Title_2 text_left c-bw-1 mb-3 mb-sm-6 c_white"><span>Lorem ipsum dolor</span></h2>
                                    <p className="Title_p text_left medium line_height Text mb-6 c-bw-12 c_white font_1">Sentinel is a multi-protocol network where users and applications can access a global distributed services and resources.</p>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="section_5">
                        <div className="container">
                            <div className="row row__flex align-items-center">
                                <div className="col-xs-12 col-sm-6">
                                    <h2 class="Title_2 text_left c-bw-1 mb-3 mb-sm-6 c_white"><span>Servers hosted by the community for the community</span></h2>
                                    <p className="Title_p text_left medium line_height Text mb-6 c-bw-12 c_white font_1">Sentinel is a multi-protocol network where users and applications can access a global distributed services and resources.</p>
                                </div>
                                <div className="col-xs-12 col-sm-6">
                                    <img src={Group_4} className="img-responsive img_width" alt="dApp_sheild" title="dApp_sheild" />

                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="section_6">
                        <div className="container">
                            <div className="row row__flex">
                                <div className="col-xs-12 col-sm-6">
                                    <h1 class="Title text_left h1 c-bw-1 mb-3 mb-sm-6 c_white"><span>dApps that have real utility</span></h1>
                                    <p className="Title text_left medium line_height Text mb-6 c-bw-12 c_white font_1">Live transparent stats indicating the actual usage of the Sentinel dVPN network which is utilized by thousands of unique users everyday.</p>
                                    <div className="btn_sent font_1 text_left">
                                        <a class="Button Button--grad Button--block-xs text_left" href="" role="button" tabindex="0"><span>Check Stats</span></a>
                                    </div>
                                </div>
                                <div className="col-xs-12 col-sm-6">
                                    <div className="row row__flex">
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
                        <div className="head_2">
                            <h1>dAPPs built on the Sentinel Blockchain</h1>
                        </div>
                        <div className="container ">
                            <div className="col-sm-12">
                                <div className="row row__flex">
                                    <div className="col-xs-12 col-sm-6 align-items-center">
                                        <div className="dApp_sec">
                                            <img src={Group_dvpn} alt="dApp" title="dApp" className="" />
                                            <p class="Title_p medium line_height Text mb-6 c-bw-12 c_white font_1 padd_text">Sentinel is a multi-protocol network where users and applications can access a global distributed services and resources.</p>
                                            <div class="btn_sent font_1"><a class="Button Button--bblue Button--block-xs text_left" href="" role="button" tabindex="0"><span>Download</span></a></div>
                                            <a className="r_node" href="#">Run a Node</a>
                                        </div>
                                    </div>
                                    <div className="col-xs-12 col-sm-6 align-items-center">
                                        <div className="dApp_sec">
                                            <img src={Group_dvpn} alt="dApp" title="dApp" className="" />
                                            <p class="Title_p medium line_height Text mb-6 c-bw-12 c_white font_1 padd_text">Sentinel is a multi-protocol network where users and applications can access a global distributed services and resources.</p>
                                            <div class="btn_sent font_1"><a class="Button Button--bblue Button--block-xs text_left" href="" role="button" tabindex="0"><span>Download</span></a></div>
                                            <a className="r_node" href="#">Run a Node</a>
                                        </div>
                                    </div>


                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="section_8">
                    <div className="head_3">
                        <h1>Blog</h1>
                        <h6>Latest News and Updates</h6>
                    </div>
                        <div className="container">
                            <div className="row row__flex">
                                <div className="col-sm-6">
                                    <img src={aa} alt="" title="" className="img-responsive img_width"/>
                                </div>
                                <div className="col-sm-6">
                                    <img src={aa} alt="" title="" className="img-responsive img_width"/>
                                </div>
                            </div>
                        </div>
                            
                    </section>
            </div>
            <Footer />
            </div >
        );
    }
}
export default connect(

)(MainApp);