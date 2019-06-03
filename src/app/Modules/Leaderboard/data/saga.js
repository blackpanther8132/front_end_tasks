import { put, call } from 'redux-saga/effects';
import { takeEvery, takeLatest } from 'redux-saga';
import * as actions from '../actions';
import axios from 'axios';
import * as constants from '../constants';
import { get } from 'http';
// import scientificToDec from 'scientific-to-decimal';

export default function* saga() {
  try {
    yield [
      takeLatest(actions.GET_ACTIVE_NODES, getAllActiveNodes),
      takeLatest(actions.GET_ACTIVE_SESSIONS, getAllActiveSessions),
      takeLatest(actions.GET_TOTAL_SESSIONS, getTotalSessions),
      takeLatest(actions.GET_TOTAL_CONSUMED_DATA, getTotalConsumedData),
      takeLatest(actions.GET_LATEST_SESSIONS, getLatestSessions),
      takeLatest(actions.GET_BANDWIDTH_DATA, getBandwidthData),
      takeLatest(actions.GET_RECIVER_ADDRESS, getReciverAddress),
      takeLatest(actions.GET_MARKET_VALUE, getMarketValue),
    ];
  } catch (error) {
    return;
  }
}


export function* getAllActiveNodes() {
  try {
    const response = yield axios({
      method: 'GET',
      url: "https://api.sentinelgroup.io/stats/nodes/active?interval=current"
    });
    if (response !== null) {
      const data = response.data.count;
      // console.log("this is nodes stats", data);
      yield put(actions.setAllActiveNodes(data));
    }
  }
  catch (error) {
    console.log(error);
  }
}
export function* getAllActiveSessions() {
  try {
    const response = yield axios({
      method: 'GET',
      url: "https://api.sentinelgroup.io/stats/sessions/active?filter=lastday&format=count"
    });
    if (response !== null) {
      const data = response.data.count;
      // console.log("this is nodes stats", data);
      yield put(actions.setAllActiveSessions(data));
    }
  }
  catch (error) {
    console.log(error);
  }
}
export function* getTotalSessions() {
  try {
    const response = yield axios({
      method: 'GET',
      url: "https://api.sentinelgroup.io/stats/sessions/total-count"
    });
    if (response !== null) {
      const data = response.data.count;
      // console.log("this is nodes stats", data);
      yield put(actions.setTotalSessions(data));
    }
  }
  catch (error) {
    console.log(error);
  }
}
export function* getTotalConsumedData() {
  try {
    const response = yield axios({
      method: 'GET',
      url: "https://api.sentinelgroup.io/stats/bandwidth/all?format=count"
    });
    if (response !== null) {
      const data = ((response.data.stats) / (1024 * 1024)).toFixed(2);
      // console.log("this is nodes stats", data);
      yield put(actions.setTotalConsumedData(data));
    }
  }
  catch (error) {
    console.log(error);
  }
}
export function* getLatestSessions() {
  try {
    const response = yield axios({
      method: 'GET',
      url: "https://api.sentinelgroup.io/stats/sessions/latest"
    });
    if (response !== null) {
      const data1 = response.data.stats;
      const data = data1.map(v => ({ Duration: Math.abs((v.duration).toFixed(2)), Data_transferred: (v.data_transferred).toFixed(2), Current_status: v.status = true ? "Active" : "Inactive" }))
      // console.log("this is nodes stats", data);
      yield put(actions.setLatestSessions(data));
    }
  }
  catch (error) {
    console.log(error);
  }
}
export function* getBandwidthData() {
  try {
    const response = yield axios({
      method: 'GET',
      url: "https://api.sentinelgroup.io/stats/node/bandwidth-stats"
    });
    if (response !== null) {
      const data1 = response.data.stats;
      const data = data1.map(v => ({ rank: "", Node_ID: v._id, Last_24hr: ((v.last_24hours) / 1000).toFixed(2), Last_7_days: ((v.last_7days) / 1000).toFixed(2), Last_month: ((v.last_month) / 1000).toFixed(2), total: ((v.total_bandwidth) / 1000).toFixed(2), total_sessions: v.total_sessions_count }))
      // console.log("this is nodes stats", data);
      yield put(actions.setBandwidthStats(data));
    }
  }
  catch (error) {
    console.log(error);
  }
}



export function* getReciverAddress(action) {
  try {
    const body = {
      'destination_address': action.Data.address,
      'from_symbol': action.Data.token1,
      'to_symbol': action.Data.token2,
      'delay_in_seconds': 60,
      'client_address': constants.nodeAddress,
      'node_address': constants.nodeAddress
    }
    const response = yield axios({
      method: 'post',
      url: constants.URL.swapAddressUri,
      body: JSON.stringify(body),
    });
    if (response !== null) {
      const data = {};
      yield put(actions.setReciverAddress(data));
    }
  }
  catch (error) {
    console.log(error);
  }
}

Number.prototype.noExponents = function () {
  var data = String(this).split(/[eE]/);
  if (data.length == 1) return data[0];

  var z = '', sign = this < 0 ? '-' : '',
    str = data[0].replace('.', ''),
    mag = Number(data[1]) + 1;

  if (mag < 0) {
    z = sign + '0.';
    while (mag++) z += '0';
    return z + str.replace(/^\-/, '');
  }
  mag -= str.length;
  while (mag--) z += '0';
  return str + z;
}


export function* getMarketValue(action) {
  try {
    let value = action.tokensData.value;
    const URI = `${constants.URL.conversionBaseUri}${constants.nodeAddress}&from=${action.tokensData.token1}&to=${action.tokensData.token2}&value=${value.noExponents()}`;


    // const url = yield call(this.getConversionEndPoint(action.tokensData.token1,action.tokensData.token2));
    const response = yield axios({
      method: 'GET',
      url: URI,
    });
    if (response !== null) {
      const data = { expectedTokens: response.data.value / constants.decimals[action.tokensData.token2] }
      yield put(actions.setMarketValue(data));
    }
  }
  catch (error) {
    console.log(error);
  }
}


function getConversionEndPoint(sourceToken, targetToken) {
  // https://api.coinmarketcap.com/v1/ticker/ethereum/?convert=PIVX
  const mix = `${constants.TokenSname.ETH}?convert=${constants.TokenName.PIVX}`;
  const URI = constants.URL.conversionBaseUri + mix;
  return URI;
}


