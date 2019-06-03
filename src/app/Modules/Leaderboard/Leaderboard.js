import React, { Component } from 'react';
import { connect } from 'react-redux';
import './styles/Leaderboard.css';
import './styles/bootstrap.css';
import Section1 from './components/Section_1';
import Section3 from './components/Section_3';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import * as actions from "./actions";
class Leaderboard extends Component {

  componentDidMount = () => {
    this.props.getActiveNodes();
    this.props.getActiveSessions();
    this.props.getTotalSessions();
    this.props.getTotalConsumedData();
    this.props.getLatestSessions();
    this.props.getBandwidthStats();


  }

  render() {
    const { activeNodes, activeNodesloading,
      activeSessions, activeSessionsloading,
      totalSessions,totalSessionsloading,
      dataConsumed, totalConsumedDataloading,
      latestSessions, latestSessionsloading,
      bandwidthData, bandwidthDataloading } = this.props;
    // console.log("these are active nodes", latestSessions, "rgjk", bandwidthData);

    //set token1 options
    return (
      <div className="Leaderboard">
        <Header />
        <Section1
          availableNodes={activeNodes} availableNodesloading={activeNodesloading}
          availableSessions={activeSessions} availableSessionsloading={activeSessionsloading}
          availableTotalSessions = {totalSessions} availableTotalSessionsloading = {totalSessionsloading}
          transferredData={dataConsumed} dataConsumedloading={totalConsumedDataloading}
          latestData={latestSessions} latestDataloading={latestSessionsloading}
          bandwidthData={bandwidthData} bandwidthDataloading={bandwidthDataloading}
        />
        <div className="clearfix"></div>
        {/* <Section3 /> */}
        <Footer />
      </div>
    );
  }
}


function mapStateToProps(state) {
  return {
    activeNodes: state.Leaderboard.activeNodesNumber,
    activeNodesloading: state.Leaderboard.activeNodesloading,

    activeSessions: state.Leaderboard.activeSessions,
    activeSessionsloading: state.Leaderboard.activeSessionsloading,

    totalSessions: state.Leaderboard.totalSessions,
    totalSessionsloading: state.Leaderboard.totalSessionsloading,

    dataConsumed: state.Leaderboard.totalConsumedData,
    totalConsumedDataloading: state.Leaderboard.totalConsumedDataloading,


    latestSessions: state.Leaderboard.latestSessions,
    latestSessionsloading: state.Leaderboard.latestSessionsloading,


    bandwidthData: state.Leaderboard.bandwidthData,
    bandwidthDataloading: state.Leaderboard.bandwidthDataloading,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getActiveNodes: () => {
      dispatch(actions.activeNodes());
    },
    getActiveSessions: () => {
      dispatch(actions.activeSessions());
    },
      getTotalSessions: () => {
        dispatch(actions.totalSessions());
      },
    getTotalConsumedData: () => {
      dispatch(actions.totalConsumedData());
    },
    getLatestSessions: () => {
      dispatch(actions.LatestSessions());
    },
    getBandwidthStats: () => {
      dispatch(actions.bandwidthStats());
    },
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Leaderboard);
