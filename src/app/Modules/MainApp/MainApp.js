import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Button from '@material-ui/core/Button';
import '../MainApp/styles/style.css';
// import Header from '../Header/Header';
// import Footer from '../Footer/Footer';
import TopBarProgress from "react-topbar-progress-indicator"
// import play from "../../../assets/play.svg";
import LiveChannels from './components/LiveChannels/LiveChannelsPage'
import Navigation from "./components/Navigation/navigation";
import RightSidebar from "./components/RightSidebar/rightsidebar";
import shareButton from '../../../assets/img/button/share.svg';
import shareIcon from '../../../assets/img/social_icons/shareIcon.png';
import icon_twitter from '../../../assets/img/social_icons/icon_twitter.png';
import icon_facebook from '../../../assets/img/social_icons/icon_facebook.png';
import icon_insta from '../../../assets/img/social_icons/icon_insta.png';
import icon_youtube from '../../../assets/img/social_icons/icon_youtube.png';
import icon_link from '../../../assets/img/social_icons/icon_link.png';
import * as Actions from './store/actions';
import ShowMore from 'react-show-more';
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { CopyToClipboard } from "react-copy-to-clipboard";

import $ from "jquery";
TopBarProgress.config({
    barColors: {
        "0": "#f51212",
        "1.0": "#f51212",
    },
    shadowBlur: 5,
})
class MainApp extends Component {
     openSearch = () => {
   
};
    // openSearch = () => {
    // $('.shareButton').focus(function(){
    //     $('.share_icons').show();
    // })
    // $('.share_icons_row').focusout(function(){
    //     $('.share_icons').hide();
    // });
    // };


    constructor(props) {
        super(props)
        this.state = {
            loading: false,
            videoId: "",
            heading: "",
            views : "",
            description: "",
            rightSidebar: true,
            playButton : true,
            open: false,
            setOpen: false,
            value: 'some\ntext',
            copied: false
          };
          this.handleClickOpen = this.handleClickOpen.bind(this);
          this.handleClose = this.handleClose.bind(this);
    }
    handleClickOpen = () => {
        this.setState({ setOpen: true });
      };
      handleClose = () => {
        this.setState({ setOpen: false });
      };
      onChange = ({target: {value}}) => {
        this.setState({value, copied: false});
      };
      onCopy = () => {
        this.setState({copied: true});
      };
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
                                <div className="video_fixed">
                                    <div className={rightSidebar ? "embed-responsive embed-responsive-16by9" : "embed-responsive embed-responsive-16by9 videoSize"}>
                                        <iframe width="100%" src={'https://www.youtube.com/embed/' + videoId + "?autoplay=1"}
                                            frameBorder="0" gesture="media" allow="encrypted-media" allowFullScreen="" title="Video"></iframe>
                                    </div>
                                    </div>
                                    <div className="video_caption">
                                       <span className="video_title"> {heading} </span> 
                                        <span> {views} <span> views </span></span>
                                        
                                        <span>
                                       
                                        <div className="share_icons_row">
                                        <Button className={"shareButton"} onClick={this.openSearch}>
                                            Share
                                            <img src={shareIcon}/> 
                                        </Button>
                                       
                                         
                                        <div class="share_icons">
                                        <nav>
                                            <li><a href="#"  onClick={this.handleClickOpen}><img src={icon_twitter} alt="share"/></a></li>
                                            <li><a href="#"><img src={icon_facebook} alt="share"/></a></li>
                                            <li><a href="#"><img src={icon_insta} alt="share"/></a></li>
                                            <li><a href="#"><img src={icon_youtube} alt="share"/></a></li>
                                            <li><a href="#"><img src={icon_link} alt="share"/></a></li>
                                        </nav>
                                        </div>
                                        <Dialog
                                            open={this.state.setOpen}
                                            onClose={this.handleClose}
                                            aria-labelledby="alert-dialog-title"
                                            aria-describedby="alert-dialog-description"
                                            >
                                        
                                            <DialogContent>
                                                <input type="text" onChange={this.onChange} rows={2} cols={10} value={videoId} />
                                                <CopyToClipboard

                                                        onCopy={this.onCopy}

                                                        text={this.state.value}>

                                                        <button >Copy</button>
                                                        </CopyToClipboard>       
                                                </DialogContent>
                                       
                                            </Dialog>
                                        </div>
                                        </span>
                                        <span>
                                        <ShowMore
                                        lines={2}
                                        more={<a className="show_more"><br/>Show More</a>}
                                        less={<a className="show_more"><br/>Show Less</a>}
                                        anchorClass=''
                                        >
                                        {description}
                                        </ShowMore>  </span>
                                        
                                        
                                    </div>
                                    <div className="ln"></div>
                                </div>
                                
                                <div className={rightSidebar ? "col-md-4 col-sm-12" : "hideRightSidebar"}>
                                    {/* <h5 className="live_channels">Live Channels</h5> */}
                                    <div className="clearfix"></div>
                                    <div className="video-list">
                                    <LiveChannels videoContent={this.handlePlayVideo} liveData={this.state.liveData} filteredVideos={this.handleFilteredVideos} />
                                    </div>
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
// $(function(){ 
// $('.shareButton').click(function(){
//      $(".share_icons").toggle('slide');
// });

// });
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

