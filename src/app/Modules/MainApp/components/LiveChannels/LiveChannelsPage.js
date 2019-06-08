import React, { Component } from 'react';
// import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import '../componentsStyle/componentsStyle.css';
import {
    Chat, addResponseMessage
    // , addLinkSnippet, addUserMessage  
} from 'react-chat-popup';
import logo from '../../../Shared/icon'
import { Launcher } from 'react-chat-window';
import CONSTANTS from "../../../../../constants";
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
            haryanaviChipColor: false,
            rajasthaniChipColor: false,
            punjabiChipColor: false

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
    handlVideoContent = (videoId, heading, description) => {
        this.props.videoContent(videoId, heading, description);
    }

    chipClick = (name) => {
        const color = this.state[name];
        this.setState({ [name]: !color });
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
            punjabiChipColor,
            rajasthaniChipColor,
            haryanaviChipColor } = this.state;
        const { classes } = this.props;
        console.log('value', CONSTANTS);
        return (
            <div className="livechannel_page">
                <div className="clearfix"></div>
                 
                <Card className={value ? "livechannel_card" : "livechannel_card livechannel_card_width"} >
            
                     <div className={classes.root}>
                        <ExpansionPanel defaultExpanded className="expansionPanel">
                            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />} className="expansionPanelSummary" >
                                <div className={classes.column}>
                                    <Typography className={classes.heading}>Languages</Typography>
                                </div>
                            </ExpansionPanelSummary>
                            <ExpansionPanelDetails className="expansionDetails">
                                <div className="">
                                    <Chip
                                        avatar={
                                            allLanguageChipColor ? <Avatar>
                                                <DoneIcon />
                                            </Avatar> : <Avatar>
                                            <DoneIcon />
                                          </Avatar>
                                        }
                                        label="All"
                                        className={classes.chip}
                                        onClick={() => this.chipClick("allLanguageChipColor")}
                                        color={allLanguageChipColor ? "primary" : "none"}
                                        clickable
                                    />
                                    <Chip
                                        avatar={
                                            hindiChipColor ? <Avatar>
                                                <DoneIcon />
                                            </Avatar> : <Avatar>
                                            <DoneIcon />
                                          </Avatar>
                                        }
                                        label="Hindi"
                                        className={classes.chip}
                                        onClick={() => this.chipClick("hindiChipColor")}
                                        color={hindiChipColor ? "primary" : "none"}
                                        clickable
                                    />
                                    <Chip
                                        avatar={
                                            englishChipColor ? <Avatar>
                                                <DoneIcon />
                                            </Avatar> : <Avatar>
                                            <DoneIcon />
                                      </Avatar>
                                        }
                                        label="English"
                                        className={classes.chip}
                                        onClick={() => this.chipClick("englishChipColor")}
                                        color={englishChipColor ? "primary" : "none"}
                                        clickable
                                    />
                                    <Chip
                                        avatar={
                                            teluguChipColor ? <Avatar>
                                                <DoneIcon />
                                            </Avatar> : <Avatar>
                                            <DoneIcon />
                                      </Avatar>
                                        }
                                        label="Telugu"
                                        className={classes.chip}
                                        onClick={() => this.chipClick("teluguChipColor")}
                                        color={teluguChipColor ? "primary" : "none"}
                                        clickable
                                    />
                                    <Chip
                                        avatar={
                                            tamilChipColor ? <Avatar>
                                                <DoneIcon />
                                            </Avatar> : <Avatar>
                                            <DoneIcon />
                                      </Avatar>
                                        }
                                        label="Tamil"
                                        className={classes.chip}
                                        onClick={() => this.chipClick("tamilChipColor")}
                                        color={tamilChipColor ? "primary" : "none"}
                                        clickable
                                    />
                                    <Chip
                                        avatar={
                                            punjabiChipColor ? <Avatar>
                                                <DoneIcon />
                                            </Avatar> : <Avatar>
                                            <DoneIcon />
                                      </Avatar>
                                        }
                                        label="Punjabi"
                                        className={classes.chip}
                                        onClick={() => this.chipClick("punjabiChipColor")}
                                        color={punjabiChipColor ? "primary" : "none"}
                                        clickable
                                    />
                                    <Chip
                                        avatar={
                                            rajasthaniChipColor ? <Avatar>
                                                <DoneIcon />
                                            </Avatar> : <Avatar>
                                            <DoneIcon />
                                      </Avatar>
                                        }
                                        label="Rajasthani"
                                        className={classes.chip}
                                        onClick={() => this.chipClick("rajasthaniChipColor")}
                                        color={rajasthaniChipColor ? "primary" : "none"}
                                        clickable
                                    />
                                    <Chip
                                        avatar={
                                            haryanaviChipColor ? <Avatar>
                                                <DoneIcon />
                                            </Avatar> : <Avatar>
                                            <DoneIcon />
                                      </Avatar>
                                        }
                                        label="Haryanavi"
                                        className={classes.chip}    
                                        onClick={() => this.chipClick("haryanaviChipColor")}
                                        color={haryanaviChipColor ? "primary" : "none"}
                                        clickable
                                    />
                                </div>
                            </ExpansionPanelDetails>
                        </ExpansionPanel>
                    </div>
                    <div className={classes.root} className="categoryChannel">
                        <ExpansionPanel defaultExpanded>
                            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />} className="expansionPanelSummary" >
                                <div className={classes.column}>
                                    <Typography className={classes.heading}>Category</Typography>
                                </div>
                            </ExpansionPanelSummary>
                            <ExpansionPanelDetails className="expansionDetails" >
                                <div className="">
                                    <Chip
                                        avatar={
                                            allCategoryChipColor ? <Avatar>
                                                <DoneIcon />
                                            </Avatar> : <Avatar>
                                            <DoneIcon />
                                      </Avatar>
                                        }
                                        label="All"
                                        className={classes.chip}
                                        onClick={() => this.chipClick("allCategoryChipColor")}
                                        color={allCategoryChipColor ? "primary" : "none"}
                                        clickable
                                    />
                                    <Chip
                                        avatar={
                                            entertainmentChipColor ? <Avatar>
                                                <DoneIcon />
                                            </Avatar> : <Avatar>
                                            <DoneIcon />
                                      </Avatar>
                                        }
                                        label="Entertainment"
                                        className={classes.chip}
                                        onClick={() => this.chipClick("entertainmentChipColor")}
                                        color={entertainmentChipColor ? "primary" : "none"}
                                        clickable
                                    />
                                    <Chip
                                        avatar={
                                            gameChipColor ? <Avatar>
                                                <DoneIcon />
                                            </Avatar> : <Avatar>
                                            <DoneIcon />
                                                </Avatar>
                                        }
                                        label="Games"
                                        className={classes.chip}
                                        onClick={() => this.chipClick("gameChipColor")}
                                        color={gameChipColor ? "primary" : "none"}
                                        clickable
                                    />
                                    <Chip
                                        avatar={
                                            movieChipColor ? <Avatar>
                                                <DoneIcon />
                                            </Avatar> : <Avatar>
                                            <DoneIcon />
                                      </Avatar>
                                        }
                                        label="Movie"
                                        className={classes.chip}
                                        onClick={() => this.chipClick("movieChipColor")}
                                        color={movieChipColor ? "primary" : "none"}
                                        clickable
                                    />
                                    <Chip
                                        avatar={
                                            sportChipColor ? <Avatar>
                                                <DoneIcon />
                                            </Avatar> : <Avatar>
                                            <DoneIcon />
                                      </Avatar>
                                        }
                                        label="sports"
                                        className={classes.chip}
                                        onClick={() => this.chipClick("sportChipColor")}
                                        color={sportChipColor ? "primary" : "none"}
                                        clickable
                                    />
                                </div>
                            </ExpansionPanelDetails>
                        </ExpansionPanel>
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
