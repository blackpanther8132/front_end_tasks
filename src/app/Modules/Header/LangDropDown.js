import React, { Component } from 'react';
import { connect } from 'react-redux';
import flag from '../../../assets/usa.png';
import Rflag from '../../../assets/Flag_of_Russia.svg';
import Sflag from '../../../assets/Flag_of_Spain.svg';
import Jflag from '../../../assets/Flag_of_Japan.svg';
import Cflag from '../../../assets/Flag_of_China.svg';
import language from '../Languages/index';

class LangDropDown extends Component {
    constructor(props){
        super(props);
        this.state = {
            Locale: 'en',
            flag : flag,
        }
        this.handleLanguage = this.handleLanguage.bind(this);
    }
    handleLanguage(event){
        localStorage.setItem("lang",event.target.id);
        let Flag = flag;
        switch(event.target.id){
            case 'es': Flag =Sflag; break;
            case 'ru': Flag =Rflag; break;
            case 'zh': Flag =Cflag; break;
            case 'ja': Flag =Jflag; break;
            default: Flag =flag; break;
        }
        this.setState({Locale: event.target.id,  flag: Flag});
        this.props.changeLanguage(event.target.id);
    }

    render() {
        const { lang } = this.props;
        return (
            <div>
                <div className="dropdown lang_change">
                    <div className="flag_name">
                        <img src={this.state.flag} className="img-responsive" alt="" title="" />
                        <div className="lang_name">{this.state.Locale}</div>
                    </div>
                    <div className="dropdown-content">
                        <span className="right_arrow"></span>
                        <a id='en' onClick={this.handleLanguage}>
                            <img src={flag} alt="" className="img-responsive flag" />
                            {language[lang].english}
                        </a>
                        <a id='ru' onClick={this.handleLanguage}><img src={Rflag} alt="" className="img-responsive flag" />{language[lang].russian}</a>
                        {/* <a id='es' onClick={this.handleLanguage}><img src={Sflag} alt="" className="img-responsive flag" />{language[lang].spanish}</a>
                        <a id='ja' onClick={this.handleLanguage}><img src={Jflag} alt="" className="img-responsive flag" />{language[lang].japanese}</a>
                        <a id='zh' onClick={this.handleLanguage}><img src={Cflag} alt="" className="img-responsive flag" />{language[lang].chinese}</a> */}
                    </div>
                </div>
            </div>
        );
    }
}
const mapStateToProps = state => {
    return {
        lang: state.language
    }
}

function mapDispatchToProps(dispatch) {
    return {
        changeLanguage: (lang) => dispatch({type: 'changeLanguage', value: {lang}})
    };
  }
export default connect(mapStateToProps,mapDispatchToProps)(LangDropDown);