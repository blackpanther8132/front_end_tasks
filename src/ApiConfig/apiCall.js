import axios from 'axios';
const token = localStorage.getItem("authorizationToken");

export const getMethodRoute = async (route, type, params) => {
  try {
    const res = await axios.get(route);
    if (res && res.data) {
      return {
        type: `${type}`,
        payload: {
          ...res.data,
          isFetching: false
        },
        params
      };
    } else {
      return {
        type: `${type}`,
        payload: {
          // condinationally adding property
          ...(res.data ? res.data : []),
          isFetching: false
        },
        params
      };
    }
  } catch (err) {
    let message = '';
    //if (extractErrorMessage(err)) message = extractErrorMessage(err);

    message = err.response && err.response.data ? err.response.data.message : 'something went wrong'
console.log("error message", message)
  }
};



