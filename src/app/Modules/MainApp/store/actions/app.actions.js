import axios from 'axios';
import { getMethodRoute } from '../../../../../ApiConfig/apiCall';
const URL = "http://35.200.192.3:5000";
export const GET_CHANNEL_LIST = '[APP] GET_CHANNEL_LIST';


export function getChannelList() {
    return async dispatch => {
        const res = await getMethodRoute(
            URL,
            GET_CHANNEL_LIST,
        );
        console.log("this is console", res)
        dispatch(res)
    }
}
export function filteredVideos(name) {
    return async dispatch => {
        const res = await getMethodRoute(
            URL + "/?lang="+name,
            GET_CHANNEL_LIST,
        );
        console.log("this is console", res)
        dispatch(res)
    }
}
