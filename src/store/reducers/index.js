import { combineReducers } from 'redux';
import App from '../../app/Modules/MainApp/store/reducers/index';


const createReducer = (asyncReducers) =>
    combineReducers({
        App,
        ...asyncReducers,
    });
    
export default createReducer;
