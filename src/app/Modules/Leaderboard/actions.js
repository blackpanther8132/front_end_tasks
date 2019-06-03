
import {
    NAME,
} from './constants';



export const GET_ACTIVE_NODES = `${NAME}/GET_ACTIVE_NODES`;
export const SET_ACTIVE_NODES = `${NAME}/SET_ACTIVE_NODES`;

export const GET_ACTIVE_SESSIONS = `${NAME}/GET_ACTIVE_SESSIONS`;
export const SET_ACTIVE_SESSIONS = `${NAME}/SET_ACTIVE_SESSIONS`;

export const GET_TOTAL_SESSIONS = `${NAME}/GET_TOTAL_SESSIONS`;
export const SET_TOTAL_SESSIONS = `${NAME}/SET_TOTAL_SESSIONS`;

export const GET_TOTAL_CONSUMED_DATA = `${NAME}/GET_TOTAL_CONSUMED_DATA`;
export const SET_TOTAL_CONSUMED_DATA = `${NAME}/SET_TOTAL_CONSUMED_DATA`;

export const GET_LATEST_SESSIONS = `${NAME}/GET_LATEST_SESSIONS`;
export const SET_LATEST_SESSIONS = `${NAME}/SET_LATEST_SESSIONS`;

export const GET_BANDWIDTH_DATA = `${NAME}/GET_BANDWIDTH_DATA`;
export const SET_BANDWIDTH_DATA = `${NAME}/SET_BANDWIDTH_DATA`;

export const GET_RECIVER_ADDRESS = `${NAME}/GET_RECIVER_ADDRESS`;
export const SET_RECIVER_ADDRESS = `${NAME}/SET_RECIVER_ADDRESS`;

export const GET_MARKET_VALUE = `${NAME}/GET_MARKET_VALUE`;
export const SET_MARKET_VALUE = `${NAME}/SET_MARKET_VALUE`;

export const SET_STEP2 = `${NAME}/SET_STEP2`;
export const SET_STEP3 = `${NAME}/SET_STEP3`;


export function activeNodes() {
    return {
        type: GET_ACTIVE_NODES,
    };
}
export function setAllActiveNodes(data) {
    return {
        type: SET_ACTIVE_NODES,
        data
    };
}


export function activeSessions() {
    return {
        type: GET_ACTIVE_SESSIONS,
    };
}
export function setAllActiveSessions(data) {
    return {
        type: SET_ACTIVE_SESSIONS,
        data
    };
}


export function totalSessions() {
    return {
        type: GET_TOTAL_SESSIONS,
    };
}
export function setTotalSessions(data) {
    return {
        type: SET_TOTAL_SESSIONS,
        data
    };
}


export function totalConsumedData() {
    return {
        type: GET_TOTAL_CONSUMED_DATA,
    };
}
export function setTotalConsumedData(data) {
    return {
        type: SET_TOTAL_CONSUMED_DATA,
        data
    };
}

export function LatestSessions() {
    return {
        type: GET_LATEST_SESSIONS,
    };
}
export function setLatestSessions(data) {
    return {
        type: SET_LATEST_SESSIONS,
        data
    };
}

export function bandwidthStats() {
    return {
        type: GET_BANDWIDTH_DATA,
    };
}
export function setBandwidthStats(data) {
    return {
        type: SET_BANDWIDTH_DATA,
        data
    };
}



export function getReciverAddress(addressData) {
    return {
        type: GET_RECIVER_ADDRESS,
        addressData
    };
}

export function setReciverAddress(recivedAddress) {
    return {
        type: SET_RECIVER_ADDRESS,
        recivedAddress
    };
}


export function getMarketValue(tokensData) {
    return {
        type: GET_MARKET_VALUE,
        tokensData
    };
}

export function setMarketValue(marketValue) {
    return {
        type: SET_MARKET_VALUE,
        marketValue
    };
}

export function setStep2(data) {
    return {
        type: SET_STEP2,
        payload: data
    };
}
export function setStep3(data) {
    return {
        type: SET_STEP3,
        payload: data
    };
}