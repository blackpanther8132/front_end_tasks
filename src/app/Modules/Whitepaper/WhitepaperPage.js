import React, { Component } from 'react';

import TextField from '@material-ui/core/TextField';
import mailingImg from '../../../assets/mailing_list.png';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import './whitepaper.css';
import '../Roadmap/roadmap.css';

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

class Whitepaper extends Component {

    state = {
        name: ''
    }

    handleChange = name => event => {
        this.setState({
            [name]: event.target.value,
        });
    };
    render() {
        const { classes } = this.props;
        return (
            <div className="Main_section">
                <div className="roadmap">
                    <div className="container-fluid network_firstsection">
                        <div className="row align-items-center roadmap_section1">
                            <div className="container">
                                <div className="row row__flex align-items-center row_second">
                                    <div className='sentinel_roadmap col-md-8 text-left'>
                                        <p>
                                            Sentinel White Paper coming soon!
                                        </p>
                                        <p>
                                            Most reliable network
                                        </p>
                                    </div>
                                    <div className="btn_sent font_1 text-right col-md-4 view_git_button_div">
                                        <a className="Button Button--blue Button--block-xs text_left view_git_button" href="" role="button"><span>View Git</span></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div >
                <div className='lite_paper'>
                    <div className="container">
                        <h2>Sentinel White Paper coming soon!</h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.
                        </p>
                        <a className="Button Button--grad Button--block-xs text_left" href="" role="button"><span>Check Stats</span></a>
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
                <div className='roadmap_lastSection'>
                    <div className='container'>
                        <div className='col-md-6 left text-left'>
                            <p>Browse without border</p>
                            <div className="btn_sent font_1"><a className="Button Button--bblue Button--block-xs text_left" href="" role="button"><span>Get Sentinel dVPN</span></a></div>
                        </div>
                        <div className='col-md-5 right'>
                            <div className='lastSection_checkMark'>
                                <p>Secure browsing</p>
                            </div>
                            <div className='lastSection_checkMark'>
                                <p>All platforms</p>
                            </div>
                            <div className='lastSection_checkMark'>
                                <p>Unlimited Access</p>
                            </div>
                            <div className='lastSection_checkMark'>
                                <p>Open source</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default withStyles(styles)(Whitepaper);