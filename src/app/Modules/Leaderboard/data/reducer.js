import * as actionTypes from '../actions';
import { updateObject } from '../../Shared/Utility';

const initialState = {
    activeNodesNumber : 0,
    activeNodesloading : false,

    activeSessions: 0,
    activeSessionsloading : false,

    totalSessions: 0,
    totalSessionsloading : false,

    totalConsumedData : 0,
    totalConsumedDataloading : false,


    latestSessions : [],
    latestSessionsloading : false,

    
    bandwidthData : [],
    bandwidthDataloading : false,

    expectedTokens: 0,
    reciverAddress: '',
    step2: false,
    step3: false,



   
};


export const setAllActiveNodes = (state = initialState.activeNodesNumber, action) => {
    return updateObject(state, { activeNodesNumber: action.data, activeNodesloading: true });
};
export const setAllActiveSessions = (state = initialState.activeSessions, action) => {
    return updateObject(state, { activeSessions: action.data, activeSessionsloading: true });
};
export const setTotalSessions = (state = initialState.totalSessions, action) => {
    return updateObject(state, { totalSessions: action.data, totalSessionsloading: true });
};
export const setTotalConsumedData = (state = initialState.totalConsumedData, action) => {
    return updateObject(state, { totalConsumedData: action.data, totalConsumedDataloading: true });
};
export const setLatestSessions = (state = initialState.latestSessions, action) => {
    return updateObject(state, { latestSessions: action.data, latestSessionsloading: true });
};
export const setBandwidthStats = (state = initialState.bandwidthData, action) => {
    return updateObject(state, { bandwidthData: action.data, bandwidthDataloading: true });
};




export const setSessions = (state = initialState.sessions, action) => {
    return updateObject(state, { sessions: action.SessionsStats, loading: true });
};
export const setActiveSessions = (state = initialState.activeSessions, action) => {
    return updateObject(state, { activeSessions: action.activeSessions.count, loading: true });
};

export const setMarketValue = (state = initialState.expectedTokens, action) => {
    return updateObject(state, action.marketValue);
};

export const setReciverAddress = (state = initialState.reciverAddress, action) => {
    return updateObject(state, action.reciverAddress);
};
export const toggleStep2 = (state = initialState.step2, action) => {
    return updateObject(state, { step2: action.payload });
};
export const toggleStep3 = (state = initialState.step3, action) => {
    return updateObject(state, { step3: action.payload });
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_ACTIVE_NODES:
            return setAllActiveNodes(state, action);
        case actionTypes.SET_ACTIVE_SESSIONS:
            return setAllActiveSessions(state, action);
        case actionTypes.SET_TOTAL_SESSIONS:
            return setTotalSessions(state, action);
        case actionTypes.SET_TOTAL_CONSUMED_DATA:
            return setTotalConsumedData(state, action);
        case actionTypes.SET_LATEST_SESSIONS:
            return setLatestSessions(state, action);
        case actionTypes.SET_BANDWIDTH_DATA:
            return setBandwidthStats(state, action);
        case actionTypes.SET_RECIVER_ADDRESS:
            return setReciverAddress(state, action);
        case actionTypes.SET_MARKET_VALUE:
            return setMarketValue(state, action);
        case actionTypes.SET_STEP2:
            return toggleStep2(state, action);
        case actionTypes.SET_STEP3:
            return toggleStep3(state, action);
        default:
            return state;
    }
};

export default reducer;