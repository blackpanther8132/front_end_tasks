import React, { Component } from 'react';
// import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import '../componentsStyle/componentsStyle.css';
import {
    Chat, addResponseMessage
    // , addLinkSnippet, addUserMessage  
} from 'react-chat-popup';
import playButton from '../../../../../assets/img/videoplayButton/play.svg';
import pauseButton from '../../../../../assets/img/videoplayButton/pause.svg';
import logo from '../../../Shared/icon'
import { Launcher } from 'react-chat-window';
import CONSTANTS from "../../../../../constants";
import CardHeader from '@material-ui/core/CardHeader';
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';

import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
} from 'reactstrap';
import { Card, ExpansionPanel, ExpansionPanelSummary, Typography, Chip, ExpansionPanelDetails, Avatar } from "@material-ui/core"
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import DoneIcon from '@material-ui/icons/Done';
import FaceIcon from '@material-ui/icons/Face';


const styles = theme => ({
    root: {
        width: '100%',
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
    },
    secondaryHeading: {
        fontSize: theme.typography.pxToRem(15),
        color: theme.palette.text.secondary,
    },
    icon: {
        verticalAlign: 'bottom',
        height: 20,
        width: 20,
    },
    details: {
        alignItems: 'center',
    },
    column: {
        flexBasis: '33.33%',
    },
    chip: {
        margin: theme.spacing.unit,
        background: "#40514E"
    },
    helper: {
        borderLeft: `2px solid ${theme.palette.divider}`,
        padding: `${theme.spacing.unit}px ${theme.spacing.unit * 2}px`,
    },
    link: {
        color: theme.palette.primary.main,
        textDecoration: 'none',
        '&:hover': {
            textDecoration: 'underline',
        },
    },
});


class LiveChannelPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            loading: false,
            channel: CONSTANTS.channel,
            value: false,
            messageList: '',
            selectList: true,
            isOpen: false,
            hindiChipColor: false,
            englishChipColor: false,
            teluguChipColor: false,
            tamilChipColor: false,
            gameChipColor: false,
            gameChipColor: false,
            movieChipColor: false,
            sportChipColor: false,
            allLanguageChipColor: false,
            allCategoryChipColor: false,
            newsChipColor: false,
            haryanaviChipColor: false,
            rajasthaniChipColor: false,
            punjabiChipColor: false,
            bgColor: ""

        }
    }

    componentWillMount = () => {
        this.setState({ loading: true })
    }

    componentDidMount = () => {
        this.setState({ loading: false })
        addResponseMessage("Welcome to this awesome chat!");
    }

    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    handleNewUserMessage = (newMessage) => {
        this.setState({
            value: true,
        })
        // console.log(`New message incomig! ${newMessage}`);
        // Now send the message throught the backend API
    }
    Chatbot = (e) => {
        //   console.log("bot in", e)
        this.setState({
            value: !this.state.value,
        })
    }

    //   chat second
    onMessageWasSent(message) {
        console.log('onmessage was sent', message)
        this.setState({
            messageList: [...this.state.messageList, message],
            value: !this.state.value,
        })
    }

    sendMessage(text) {
        console.log('sendmessage', text)
        if (text.length > 0) {
            this.setState({
                messageList: [...this.state.messageList, {
                    author: 'them',
                    type: 'text',
                    data: { text }
                }]
            })
        }
    }
    handlVideoContent = (videoId, heading, description, views) => {
        this.setState({
            bgColor: "red"
          })
        this.props.videoContent(videoId, heading, description, views);
    }

    chipClick = (name, type) => {
        const color = this.state[name];
        this.setState({ [name]: !color });

        if (name === "teluguChipColor") {
            this.props.filteredVideos("telugu")
        }
        else if (name === "allLanguageChipColor") {
            this.props.filteredVideos("all")
        }

        if (name === "teluguChipColor") {
            // this.props.filteredVideos("telugu")
        }
    }
    handleSelectList = (name) => {
        if (name === "Language") {
            this.setState({ selectList: true });
        }
        if (name === "Category") {
            this.setState({ selectList: false });
        }
    }

    render() {
        const { channelIcons, cardschannel, channel, value, hindiChipColor,
            englishChipColor,
            teluguChipColor,
            tamilChipColor,
            entertainmentChipColor,
            gameChipColor,
            movieChipColor,
            sportChipColor,
            allCategoryChipColor,
            allLanguageChipColor,
            newsChipColor,
            punjabiChipColor,
            rajasthaniChipColor,
            haryanaviChipColor,
            selectList } = this.state;
        const { classes, liveData } = this.props;
        // const videoData = liveData !== undefined && liveData.map(data => {
        //     data.playButton = playButton;
        //     data.pauseButton = pauseButton;
        //     return data;
        // })
        // console.log("video data", videoData);
        console.log('value', liveData);

        const languageSelected = [allLanguageChipColor ? 1 : 0, englishChipColor ? 1 : 0, hindiChipColor ? 1 : 0, teluguChipColor ? 1 : 0];
        const categorySelected = [allCategoryChipColor ? 1 : 0, entertainmentChipColor ? 1 : 0, gameChipColor ? 1 : 0, movieChipColor ? 1 : 0, sportChipColor ? 1 : 0, newsChipColor ? 1 : 0];
        function add(accumulator, a) {
            return accumulator + a;
        }
        const languageSum = languageSelected.reduce(add, 0);
        const categorySum = categorySelected.reduce(add, 0);

        return (
            <div className="livechannel_page">
                <div className="clearfix"></div>
                {/* <Navbar color="light" light expand="md">
                    <NavbarBrand href="/">reactstrap</NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink href="/components/">Components</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
                            </NavItem>
                            <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle nav caret>
                            Options
                            </DropdownToggle>
                            <DropdownMenu right>
                            <DropdownItem>
                                Option 1
                            </DropdownItem>
                            <DropdownItem>
                                Option 2
                            </DropdownItem>
                            <DropdownItem divider />
                            <DropdownItem>
                                Reset
                            </DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                        </Nav>
                    </Collapse>
                </Navbar> */}
                <Card className={value ? "livechannel_card" : "livechannel_card livechannel_card_width"} >
                <div className="live_language">
                 {/* <div className={classes.root}>
                            <ExpansionPanel defaultExpanded className="expansionPanel">
                                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />} className="expansionPanelSummary" >
                                    <div className={classes.column}>
                                    <div className={"live_right_card_top"} onClick={() => this.handleSelectList("Language")}>Language({languageSum === 2 ? "All" : languageSum})</div>
                                    </div>
                                </ExpansionPanelSummary>
                                <ExpansionPanelDetails className="expansionDetails">
                                    <div className="">
                                    <Chip
                                    avatar={
                                        allLanguageChipColor ? <Avatar>
                                            <DoneIcon
                                            />
                                        </Avatar> : <Avatar>
                                                Aa
                                          </Avatar>
                                    }
                                    label="All"
                                    className={classNames(classes.chip, allLanguageChipColor ? "chipClickedcolor" : "chipUnclickedColor")}
                                    onClick={() => this.chipClick("allLanguageChipColor", "lang")}
                                    clickable
                                />
                                 
                                    </div>
                                </ExpansionPanelDetails>
                            </ExpansionPanel>
                        </div>
                        <div className={classes.root} className="categoryChannel">
                            <ExpansionPanel defaultExpanded  className="expansionPanel">
                                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />} className="expansionPanelSummary" >
                                    <div className={classes.column}>
                                    <div className={"live_right_card_top"} onClick={() => this.handleSelectList("Category")}>Categories({categorySum === 2 ? "All" : categorySum})</div>
                                    </div>
                                </ExpansionPanelSummary>
                                <ExpansionPanelDetails className="expansionDetails" >
                                    <div className="">
                                    <Chip
                                        avatar={
                                            allCategoryChipColor ? <Avatar>
                                                <DoneIcon />
                                            </Avatar> : <Avatar>
                                                    Al
                                      </Avatar>
                                        }
                                        label="All"
                                        className={classNames(classes.chip, allCategoryChipColor ? "chipClickedcolor" : "chipUnclickedColor")}
                                        onClick={() => this.chipClick("allCategoryChipColor", "category")}
                                        clickable
                                    />
                                        
                                       
                                    </div>
                                </ExpansionPanelDetails>
                            </ExpansionPanel>
                        </div>  */}

                  
                        <div className="top">
                            <div className={selectList ? "live_right_card_top active" : "live_right_card_top inactive"} onClick={() => this.handleSelectList("Language")}>Language({languageSum === 2 ? "All" : languageSum})</div>
                            <div className={selectList ? "live_right_card_top inactive" : "live_right_card_top active"} onClick={() => this.handleSelectList("Category")}>Categories({categorySum === 2 ? "All" : categorySum})</div>
                        </div>
                        {selectList ? <div className={classes.root}>
                            <div className="">
                                <Chip
                                    avatar={
                                        allLanguageChipColor ? <Avatar>
                                            <DoneIcon
                                            />
                                        </Avatar> : <Avatar>
                                                Aa
                                          </Avatar>
                                    }
                                    label="All"
                                    className={classNames(classes.chip, allLanguageChipColor ? "chipClickedcolor" : "chipUnclickedColor")}
                                    onClick={() => this.chipClick("allLanguageChipColor", "lang")}
                                    clickable
                                />
                                 <Chip
                                    avatar={
                                        englishChipColor ? <Avatar>
                                            <DoneIcon />
                                        </Avatar> : <Avatar>
                                                Aa
                                      </Avatar>
                                    }
                                    label="English"
                                    className={classNames(classes.chip, englishChipColor ? "chipClickedcolor" : "chipUnclickedColor")}
                                    onClick={() => this.chipClick("englishChipColor")}
                                    clickable
                                />
                              {/* }  <Chip
                                    avatar={
                                        hindiChipColor ? <Avatar>
                                            <DoneIcon />
                                        </Avatar> : <Avatar>
                                                आ
                                          </Avatar>
                                    }
                                    label="Hindi"
                                    className={classNames(classes.chip, hindiChipColor ? "chipClickedcolor" : "chipUnclickedColor")}
                                    onClick={() => this.chipClick("hindiChipColor")}
                                    clickable
                                /> */}
                                <Chip
                                    avatar={
                                        teluguChipColor ? <Avatar>
                                            <DoneIcon />
                                        </Avatar> : <Avatar>
                                                ఒక
                                      </Avatar>
                                    }
                                    label="Telugu"
                                    className={classNames(classes.chip, teluguChipColor ? "chipClickedcolor" : "chipUnclickedColor")}
                                    onClick={() => this.chipClick("teluguChipColor", "lang")}

                                    clickable
                                />
                                {/* <Chip
                                        avatar={
                                            tamilChipColor ? <Avatar>
                                                <DoneIcon />
                                            </Avatar> : <Avatar>
                                                    ஒரு
                                      </Avatar>
                                        }
                                        label="Tamil"
                                        className={classes.chip}
                                        onClick={() => this.chipClick("tamilChipColor")}
                                                                                clickable
                                    />
                                    <Chip
                                        avatar={
                                            punjabiChipColor ? <Avatar>
                                                <DoneIcon />
                                            </Avatar> : <Avatar>
                                                    ஒரு
                                      </Avatar>
                                        }
                                        label="Punjabi"
                                        className={classes.chip}
                                        onClick={() => this.chipClick("punjabiChipColor")}
                                        }
                                        clickable
                                    />
                                    <Chip
                                        avatar={
                                            rajasthaniChipColor ? <Avatar>
                                                <DoneIcon />
                                            </Avatar> : <Avatar>
                                                    ஒரு
                                      </Avatar>
                                        }
                                        label="Rajasthani"
                                        className={classes.chip}
                                        onClick={() => this.chipClick("rajasthaniChipColor")}
                                        clickable
                                    />
                                    <Chip
                                        avatar={
                                            haryanaviChipColor ? <Avatar>
                                                <DoneIcon />
                                            </Avatar> : <Avatar>
                                                    ஒரு
                                      </Avatar>
                                        }
                                        label="Haryanavi"
                                        className={classes.chip}
                                        onClick={() => this.chipClick("haryanaviChipColor")}
                                        clickable
                                    /> */}
                            </div>
                        </div> :
                            <div className={classNames(classes.root, "categoryChannel")}>
                                <div className="">
                                    <Chip
                                        avatar={
                                            allCategoryChipColor ? <Avatar>
                                                <DoneIcon />
                                            </Avatar> : <Avatar>
                                                    Al
                                      </Avatar>
                                        }
                                        label="All"
                                        className={classNames(classes.chip, allCategoryChipColor ? "chipClickedcolor" : "chipUnclickedColor")}
                                        onClick={() => this.chipClick("allCategoryChipColor", "category")}
                                        clickable
                                    />
                                    {/* <Chip
                                        avatar={
                                            entertainmentChipColor ? <Avatar>
                                                <DoneIcon />
                                            </Avatar> : <Avatar>
                                                    ET
                                      </Avatar>
                                        }
                                        label="Entertainment"
                                        className={classNames(classes.chip, entertainmentChipColor ? "chipClickedcolor" : "chipUnclickedColor")}
                                        onClick={() => this.chipClick("entertainmentChipColor")}
                                        clickable
                                    /> */}
                                    <Chip
                                        avatar={
                                            newsChipColor ? <Avatar>
                                                <DoneIcon />
                                            </Avatar> : <Avatar>
                                                    N
                                                </Avatar>
                                        }
                                        label="News"
                                        className={classNames(classes.chip, newsChipColor ? "chipClickedcolor" : "chipUnclickedColor")}
                                        onClick={() => this.chipClick("newsChipColor", "category")}
                                        clickable
                                    />
                                    {/* <Chip
                                        avatar={
                                            gameChipColor ? <Avatar>
                                                <DoneIcon />
                                            </Avatar> : <Avatar>
                                                    <FaceIcon />
                                                </Avatar>
                                        }
                                        label="Games"
                                        className={classNames(classes.chip, gameChipColor ? "chipClickedcolor" : "chipUnclickedColor")}
                                        onClick={() => this.chipClick("gameChipColor")}
                                        clickable
                                    /> */}
                                    {/* <Chip
                                        avatar={
                                            movieChipColor ? <Avatar>
                                                <DoneIcon />
                                            </Avatar> : <Avatar>
                                                    mt
                                      </Avatar>
                                        }
                                        label="Movie"
                                        className={classNames(classes.chip, movieChipColor ? "chipClickedcolor" : "chipUnclickedColor")}
                                        onClick={() => this.chipClick("movieChipColor")}
                                        clickable
                                    />
                                    <Chip
                                        avatar={
                                            sportChipColor ? <Avatar>
                                                <DoneIcon />
                                            </Avatar> : <Avatar>
                                                    आ
                                      </Avatar>
                                        }
                                        label="sports"
                                        className={classNames(classes.chip, sportChipColor ? "chipClickedcolor" : "chipUnclickedColor")}
                                        onClick={() => this.chipClick("sportChipColor")}
                                        clickable
                                    /> */}
                                </div>
                            </div>}
                    </div>
                                
                    <div className="live_filtered">
                        Filtered
                    </div>
                    <div className="section_filtered">   
                   

                    {liveData && liveData.map(icon =>
                        <div key={icon.liveId} className="livechannel_sections">
                            <div className="livechannel_card_header">
                                <div className="live_card_videoPlay">
                                    <img id="img" className="style-scope yt-img-shadow" alt="" style={{ cursor: "pointer" }}
                                        src={icon.imageUrl} onClick={() => this.handlVideoContent(icon.liveId, icon.name, icon.description, icon.views)} />
                                </div>
                                <div className="live_card_videoPlay video_name" tyle={{backgroundColor: this.state.bgColor}}>
                                    <span onClick={() => this.handlVideoContent(icon.liveId, icon.name, icon.description, icon.views)}>{icon.name}</span>
                                    <span> {icon.category }   </span>
                                </div>
                                <div className="live_card_videoPlay playbutton">
                            
                            <IconButton aria-label="Settings">
                            <MoreVertIcon />
                            </IconButton>
                              </div>
                            </div>
                           
                            {/* <div className="livechannel_card_content">
                                <div className="livechannel_content_section">
                                    {liveData && liveData.map(icon => (
                                        <div className="channel_icon">
                                            <img id="img" class="style-scope yt-img-shadow" alt="" width="48"
                                                src={icon.imageUrl} onClick={() => this.handlVideoContent(icon.liveId, icon.name, icon.description)} />
                                        </div>
                                    ))}
                                </div>
                            </div> */}
                        </div>
                    )}
                    </div>
                </Card>
                {/* <Card className="livechannel_chat_card">
                    <div className="App chatpage_section"
                        onClick={e => this.Chatbot(e)}>
                        <Chat
                            // showCloseButton = {false }
                            handleNewUserMessage={this.handleNewUserMessage}
                            profileAvatar={logo}
                            title="My new awesome title"
                            subtitle="And my cool subtitle"
                        />
                    </div>
                    <div>
                        <Launcher
                            agentProfile={{
                            teamName: 'react-chat-window',
                            imageUrl: 'https://a.slack-edge.com/66f9/img/avatars-teams/ava_0001-34.png'
                            }}
                            onMessageWasSent={this.onMessageWasSent.bind(this)}
                            messageList={this.state.messageList}
                            showEmoji
                        />
                    </div>
                </Card> */}
            </div>
        );
    }
}
export default withStyles(styles)(LiveChannelPage);
