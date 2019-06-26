import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import '../MainApp/styles/style.css';
// import Header from '../Header/Header';
// import Footer from '../Footer/Footer';
import TopBarProgress from "react-topbar-progress-indicator"
// import play from "../../../assets/play.svg";
import LiveChannels from './components/LiveChannels/LiveChannelsPage'
import Navigation from "./components/Navigation/navigation";
import RightSidebar from "./components/RightSidebar/rightsidebar";
import shareButton from '../../../assets/img/button/share.svg';
import classNames from 'classnames';
import * as Actions from './store/actions';



TopBarProgress.config({
    barColors: {
        "0": "#f51212",
        "1.0": "#f51212",
    },
    shadowBlur: 5,
})
class MainApp extends Component {

    constructor(props) {
        super(props)
        this.state = {
            loading: false,
            videoId: "",
            heading: "",
            views : "",
            description: "",
            rightSidebar: true,
            playButton : true
        }

    }
    componentWillMount = () => {
        this.setState({ loading: true });
        this.props.getChannelList();
    }
    

    componentDidMount = () => {
        this.props.getChannelList()
            .then(res => {
                const { livestreams } = this.props;
                console.log("this is.............", livestreams)
                this.setState({
                    liveData: livestreams,
                    videoId: livestreams[0].liveId,
                    heading: livestreams[0].name,
                    views : livestreams[0].views,
                    description: livestreams[0].description,
                });
            })
        this.setState({
            loading: false,
        });
    }
    handleFilteredVideos = (name) => {
        this.props.filteredVideos(name)
            .then(res => {
                const { livestreams } = this.props;
                console.log("this is.............", livestreams)
                if (typeof livestreams === "object") {
                    if (livestreams.length >= 1) {
                        this.setState({
                            liveData: livestreams,
                            videoId: livestreams[0].liveId,
                            heading: livestreams[0].name,
                            description: livestreams[0].description,
                        });
                    }
                }
            })
    }



    handlePlayVideo = (id, heading, description, views) => {
        this.setState({
            videoId: id,
            heading: heading,
            views : views,
            description: description
        });

    }
    changeView = () => {
        const sidebar = this.state.rightSidebar;
        this.setState({ rightSidebar: !sidebar });
    }
    render() {
        const { videoId, heading,views, description, rightSidebar } = this.state;
        const { classNames, livestreams } = this.props;
        return (
            <div className="freeflix">
                {this.state.loading ? <TopBarProgress />
                    :
                    <div className="main-container">
                        <Navigation />
                        <div className="container-fluid live_channel_dispaly">
                            <div className="row content">
                                <div className={rightSidebar ? "col-md-8 col-sm-12 ml-auto" : "col-md-12 col-sm-12 ml-auto"}>
                                    <div className={rightSidebar ? "embed-responsive embed-responsive-16by9" : "embed-responsive embed-responsive-16by9 videoSize"}>
                                        <iframe width="100%" src={'https://www.youtube.com/embed/' + videoId + "?autoplay=1"}
                                            frameBorder="0" gesture="media" allow="encrypted-media" allowFullScreen="" title="Video"></iframe>
                                    </div>
                                    <div className="video_caption">
                                        <span > {heading} </span>
                                        <span> {description} </span>
                                        <span> {views} <span> views </span></span>
                                        <span> <img src={shareButton} alt="share"/> </span>
                                    </div>
                                    <div className="ln"></div>
                                </div>
                                
                                <div className={rightSidebar ? "col-md-4 col-sm-12" : "hideRightSidebar"}>
                                    {/* <h5 className="live_channels">Live Channels</h5> */}
                                    <div className="clearfix"></div>
                                    <LiveChannels videoContent={this.handlePlayVideo} liveData={this.state.liveData} filteredVideos={this.handleFilteredVideos} />
                                    {/* <div className="aside_part active">
                                    <div className="channel_icon">
                                        <img id="img" class="style-scope yt-img-shadow" alt="" width="48" src="https://yt3.ggpht.com/a-/AAuE7mBKVWQl9E-729CUmKBOVbTWxsc13lR_HrzNAw=s88-mo-c-c0xffffffff-rj-k-no" />
                                        {/* <span className="play_id"> <img src={play} className="img_play_icon" alt="img"/></span> 
                                    </div>
                                    <div className="channel_name">
                                        <div className="channel_details">
                                            <h6 className="title">TV9 Telugu Live</h6>
                                            <h6 className="sub_title">Views: <span>100</span></h6>
                                            {/* <h6 className="sub_title">Watching Now</h6> 
                                        </div>
                                    </div>
                                    <div className="clearfix"></div>
                                </div>
                                <div className="aside_part">
                                    <div className="channel_icon">
                                        <img id="img" class="style-scope yt-img-shadow" alt="" width="48" src="https://yt3.ggpht.com/a-/AAuE7mAlVxDW-1S31gtfS68Huti4efQbIYHS08sGjw=s88-mo-c-c0xffffffff-rj-k-no" />
                                    </div>
                                    <div className="channel_name">
                                        <div className="channel_details">
                                            <h6 className="title">ABN Telugu Live</h6>
                                            <h6 className="sub_title">Views: <span>100</span></h6>
                                        </div>
                                    </div>
                                    <div className="clearfix"></div>
                                </div>
                                <div className="aside_part">
                                    <div className="channel_icon channel_error">
                                        <img id="img" class="style-scope yt-img-shadow" alt="" width="48" src="https://yt3.ggpht.com/a-/AAuE7mA5it_x9A9UjST9VEKXwg8ved6zYml4Buh6yQ=s88-mo-c-c0xffffffff-rj-k-no" />
                                    </div>
                                    <div className="channel_name">
                                        <div className="channel_details">
                                            <h6 className="title">NTV Telugu Live</h6>
                                            <h6 className="sub_title">Views: <span>100</span></h6>
                                        </div>
                                    </div>
                                    <div className="clearfix"></div>
                                </div>*/}
                                </div>
                            </div>
                        </div>
                        {/* <RightSidebar toggle={rightSidebar} changeTheatermode={this.changeView} /> */}
                    </div>
                }
            </div>
        );
    }
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        getChannelList: Actions.getChannelList,
        filteredVideos: Actions.filteredVideos
    }, dispatch);
}

function mapStateToProps({ App }) {
    return {
        livestreams: App.Freeflix.app
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(MainApp);

