import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../MainApp/styles/style.css';
import logo from './components/share.png';
import tv from './components/tv9.png';
// import Header from '../Header/Header';
// import Footer from '../Footer/Footer';
import TopBarProgress from "react-topbar-progress-indicator"
// import play from "../../../assets/play.svg";
import LiveChannels from './components/LiveChannels/LiveChannelsPage'
import Navigation from "./components/Navigation/navigation";
import Language from "./components/Navigation/Language";
import Category from "./components/Navigation/Category";
import RightSidebar from "./components/RightSidebar/rightsidebar";
import classNames from 'classnames';

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
            videoId: "KDxJlW6cxRk",
            heading: "TV9 Live updates",
            description: "ABCL’s TV9 is a leading 24-hours Telugu News channel that presents the complete picture of news stories that are relevant in a vivid and insightful manner. TV9 operates out of Hyderabad with network channels in Mumbai, Gujarat, Bangalore and Delhi.",
            rightSidebar: true
        }

    }
    componentWillMount = () => {
        this.setState({ loading: true })
    }

    componentDidMount = () => {
        this.setState({ loading: false })
    }
    handlePlayVideo = (id, heading, description) => {
        console.log("videoid", id);
        this.setState({
            videoId: id,
            heading: heading,
            description: description
        });

    }
    changeView = () => {
        const sidebar = this.state.rightSidebar;
        this.setState({ rightSidebar: !sidebar });
    }
    render() {
        const { videoId, heading, description, rightSidebar } = this.state;
        const { classNames } = this.props;
        return (
            <div className="freeflix">
                {this.state.loading ? <TopBarProgress />
                    :
                    <div className="container-fluid  main-container">
                        <Navigation />
                        <div className="container-fluid live_channel_dispaly">
                            <div className="row content">
                                <div className="col-md-8 col-sm-12 ml-auto ">
                                    <div className="video embed-responsive embed-responsive-16by9">
                                    <iframe width="100%" height="59px" src="https://www.youtube.com/embed/CaCuxGtp2xQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                    </div>
                                        <div className="video_caption">
                                                <div className="title" >Business Analysis </div>
                                                <div className="btns">
                                                    <a href="" >TELUGU</a>
                                                    <a href="">COMEDY</a>
                                                </div> 
                                        </div>
                                            <div className="sharebtn">
                                                <div className="share">
                                                <a href="" >share <i class="far fa-share-square"></i></a>
                                                </div>
                                            </div>
                                            
                                             <div className="ln">
                               
                                            </div>
                                </div>
                                <div className= "col-md-4 col-sm-12">
{/*                                       
                                <div className="section0">
                                <h4>Language</h4> 
                                <div className="sec0cont">
                                <Language/>
                                </div>
                                </div>
                                 <div className="section1">
                                <h4>Category</h4>
                                <div className="sec1cont">  
                                
                                <Category/>   
                                </div>
                               </div> */}
                               <LiveChannels/>
                                 <div className="section2">
                                    <h4>Filtered</h4>
                                    <div className="categ">
                                     <img src={tv} alt="logo" />
                                     <p>TV9 Telugu LIVE || Big News Big <br/> Debate : CM vs CS in AP <br></br><span>NEWS</span></p>
                                     <i class="fas fa-pause"></i>  
                                    </div>
                                    <div className="categ ply">
                                     <img src={tv} alt="logo" />
                                     <p>TV9 Telugu LIVE || Big News Big <br/>  Debate : CM vs CS in AP <br></br><span>NEWS</span></p>
                                     <i class="fas fa-play"></i>  
                                    </div>
                                    <div className="categ">
                                     <img src={tv} alt="logo" />
                                     <p>TV9 Telugu LIVE || Big News Big <br/>  Debate : CM vs CS in AP <br></br><span>NEWS</span></p>
                                     <i class="fas fa-pause"></i>  
                                    </div>
                                    <div className="categ">
                                     <img src={tv} alt="logo" />
                                     <p>TV9 Telugu LIVE || Big News Big <br/>  Debate: CM vs CS in AP <br></br><span>NEWS</span></p>
                                     <i class="fas fa-pause"></i>  
                                    </div>
                                    <div className="categ">
                                     <img src={tv} alt="logo" />
                                     <p>TV9 Telugu LIVE || Big News Big  <br/> Debate: CM vs CS in AP <br></br><span>NEWS</span></p>
                                     <i class="fas fa-pause"></i>  
                                    </div>
                                </div>
                                </div>
                            
                            </div>
                        </div>
                    </div>
                }
            </div>
        );
    }
}
export default connect()(MainApp);

