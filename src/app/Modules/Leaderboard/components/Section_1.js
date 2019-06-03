import React from 'react';
import '../styles/bootstrap.css';
import './styles/Section_1.css';
import '../styles/Leaderboard.css';
import LatestSessions from './latestSessions';
import Leaderboard_Logo from '../../../../assets/leader_logo.svg';
import Bandwidth from './bandwidthTable';

var REFERRAL_URL = 'https://version-api.sentinelgroup.io/variable?appCode=SLC&varType=LEAD';
class Section1 extends React.Component {


  constructor(props) {
    super(props);
    this.state = {
      data: [],
      Leaderboard_Logo: 1
    };
  }
  componentWillMount() {
    let url = REFERRAL_URL;
    fetch(url)
      .then((resp) => resp.json())
      .then((body) =>
        this.setState({
          loading: false,
          data: body.info,
        })
      );
  }

  render() {
    const { availableNodes, availableNodesloading,
      availableSessions, availableSessionsloading,
      availableTotalSessions, availableTotalSessionsloading,
      transferredData, dataConsumedloading,
      latestData, latestDataloading,
      bandwidthData, bandwidthDataloading } = this.props;
    // console.log("this is bandwidth data ", bandwidthData)
    function formatNumber(num) {
      return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
    }
    
    const sessionValues = formatNumber(availableTotalSessions);
    return (

      <div className="container">


        <div className="col_1">
          <div className="header_logo"> <img src={Leaderboard_Logo} alt="" /> </div>
          {this.state.data.map((v, i) => {
            if (v.name === 'header_title_1') {
              // return <h2 className="leaderboard_title" name="Leaderboard_title">{v.value}</h2>
              return <h2 className="leaderboard_title" name="Leaderboard_title"> dVPN Node Host </h2>
            }

            if (v.name === 'header_title_2') {
              return <h2 className="leaderboard_title_refer" name="Leaderboard_title"> INCENTIVE PROGRAM </h2>
            }
          }
          )}
        </div>
        <div className="col11">
              <div className="dropdown">
              <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Select
              </button>
              <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton">
                <a className="dropdown-item" href="#">Lifetime</a>
                <a className="dropdown-item" href="#">Node Incentivization - June 2019</a>
              </div>
              </div>
        </div>

  
        <div className="col_2">
          <div className="col_2_left_section">
            <div className="">
              <span> Available Nodes </span>
              <span> {availableNodesloading ? availableNodes : <div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div>}</span>
            </div>
            <div className="">
              <span> Active Sessions </span>
              <span> {availableSessionsloading ? availableSessions : <div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div>} </span>
            </div>
            <div className="">
              <span> Total Sessions </span>
              <span> {availableTotalSessionsloading ? sessionValues : <div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div>} </span>
            </div>
            <div className="">
              <span> Total Data Transferred </span>
              <span> {dataConsumedloading ? transferredData + "TB" : <div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div>}</span>
            </div>
          </div>
          <div className="col_2_right_section">
            <div>
              Latest Sessions
                    </div>
            <div className="latest_sessions_table_section">
              <LatestSessions data={latestData} loading={latestDataloading} />
            </div>
          </div>
        </div>
        <div className="col_3">
          {/* <div className = "bandwidth_provided">Bandwidth Provided</div> */}
          <div className="bandwidth_table_section"> <Bandwidth data={bandwidthData} loading={bandwidthDataloading} /> </div>
        </div>
      </div>

    );
  }
}
export default Section1;
