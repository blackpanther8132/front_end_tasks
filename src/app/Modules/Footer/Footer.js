import React, { Component } from 'react';
import Icon from '../Shared/Icon';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import '../Footer/styles/footer.css';
import Divider from '@material-ui/core/Divider';

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

const languages = [
    {
        value: 'English',
        label: 'English',
    },
    {
        value: 'Chinese',
        label: 'Chinese',
    }
];

class Footer extends Component {
    state = {
        language: 'English',
    }
    // handleLanguage(event){
    //     localStorage.setItem("lang",event.target.id);
    //         this.props.changeLanguage(event.target.id);
    // }
    handleChange = name => event => {
        this.setState({
            [name]: event.target.value,
        });
    };
    render() {
        const { classes } = this.props;
        return (
            <div>
                <footer>
                    <div className="sentinel_footer container-fluid">
                        <div className='container'>
                            <div>
                                <p className="flex-1 footer_header">Get Sentinel dVPN mobile apps</p>
                                <p className='flex-1 footer_download_text'>Download our apps for iOS and Android platforms</p>
                            </div>
                            <div className='footer_background'>
                                <div className='mobile_apps'>
                                    <div className='mr-3'>
                                        <div>
                                            <div className='apple_logo'><Icon viewClass="apple_store" icon="apple_store" /></div>
                                            <div className='apple_app_store'>
                                                <p>Download On The</p>
                                                <p>App Store</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='ml-3'>
                                        <div>
                                            <div className='apple_logo'><Icon viewClass="android" icon="android" /></div>
                                            <div className='apple_app_store'>
                                                <p>Download On The</p>
                                                <p>App Store</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='footer_list'>
                                    <ul>
                                        <li>services</li>
                                        <li>dVPN</li>
                                        <li>dChat</li>
                                    </ul>
                                    <ul>
                                        <li>case studies</li>
                                        <li>Individuals</li>
                                        <li>Small and Medium Businesses</li>
                                        <li>Country-wide Implementation</li>
                                        <li>Blockchain Network</li>
                                    </ul>
                                    <ul>
                                        <li>guides</li>
                                        <li>Installation</li>
                                        <li>Service Node Hosting</li>
                                        <li>Validator Hosting</li>
                                    </ul>
                                    <ul>
                                        <li>language</li>
                                        <li className='m-0'>
                                            <TextField
                                                id="outlined-select-currency"
                                                select
                                                className={classNames(classes.textField, 'footer_select_field')}
                                                value={this.state.language}
                                                onChange={this.handleChange('language')}
                                                SelectProps={{
                                                    MenuProps: {
                                                        className: classes.menu,
                                                    },
                                                }}
                                                margin="normal"
                                                variant="outlined"
                                            >
                                                {languages.map(option => (
                                                    <MenuItem key={option.value} value={option.value}>
                                                        {option.label}
                                                    </MenuItem>
                                                ))}
                                            </TextField>
                                        </li>
                                        <li className='mt-3'>FAQ</li>
                                        <li>Stats</li>
                                        <ul className='social_icons_footer'>
                                            <li>
                                                <a href="https://twitter.com/SentinelGroupio" title="Official Twitter Handle" target="_blank" rel="noopener noreferrer">
                                                    <Icon viewClass="twitter-logo social_icon_imgg" icon="twitter-logo" />
                                                </a>
                                            </li>
                                            <li>
                                                <a href="https://t.me/sentinelsecuritygroup" title="Official Telegram Group" target="_blank" rel="noopener noreferrer">
                                                    <Icon viewClass="telegram-plane social_icon_imgg" icon="telegram-plane" />
                                                </a>
                                            </li>
                                            <li>
                                                <a href="https://medium.com/sentinel" className="" alt="" title="" target="_blank" rel="noopener noreferrer">
                                                    <Icon viewClass="medium-m social_icon_imgg" icon="medium-m" />
                                                </a>
                                            </li>
                                        </ul>
                                    </ul>
                                </div>
                                <div className='copy_right_text'>
                                  
                                        <p>&#x24B8; 2019 SENTINEL - All Rights Reserved</p>
                                    </div>
                                    <hr className="divider"/>
                                    <div className='copy_right_text'>
                                    <p>
                                        Sentinel is powered by individual contributors from all over the world (with some of them residing in other parts of
                                        this galaxy) who wish to see a planet with more secure and efficient methods of communication and accessing data.
                                </p>
                                </div>
                            </div>
                            {/* <div className="col-md-12 nopadding">
                            <nav id="nav-menu-container">
                                <ul className="nav-menu social_icon_list">
                                    <li>
                                        <a href="https://github.com/sentinel-official" title="Official GitHub Repo" target="_blank" >
                                            <Icon viewClass="github-alt social_icon_imgg" icon="github-alt" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://t.me/sentinelsecuritygroup" title="Official Telegram Group" target="_blank" >
                                            <Icon viewClass="telegram-plane social_icon_imgg" icon="telegram-plane" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://twitter.com/SentinelGroupio" title="Official Twitter Handle" target="_blank" >
                                            <Icon viewClass="twitter-logo social_icon_imgg" icon="twitter-logo" />
                                        </a>

                                    </li>
                                </ul>
                            </nav>
                            <div className="container-fluid copy_right_sentinel">
                                <div className="container">
                                    <div className="col-md-12">
                                        <div id="left">Sentinel &#169; 2018</div>
                                        <div id="middle">contact (&#64;) SentinelGroup.io</div>
                                    </div>
                                </div>
                            </div>
                        </div> */}
                        </div>
                    </div>
                </footer>
            </div>
        );
    }
}

export default withStyles(styles)(Footer);