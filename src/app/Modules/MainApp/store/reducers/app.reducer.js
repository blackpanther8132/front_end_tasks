import * as Actions from '../actions';

const initialState = {
  app : []
}

const AppReducer = function (state = initialState, action) {
    switch (action.type) {
      case Actions.GET_CHANNEL_LIST:
          {
              console.log("this is data", action.payload)
              return {
                  app : action.payload.live_streams
              }
          }
        default:
            {
                return state;
            }
    }
}
export default AppReducer;