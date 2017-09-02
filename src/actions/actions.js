import axios from "axios";

export var setSelection = selection => {
  return {
    type: "SET_SELECTION",
    selection
  };
};

export var getRecentCamperData = () => {
  return dispatch => {
    dispatch(isRetrievingData(true));
    axios
      .get("https://fcctop100.herokuapp.com/api/fccusers/top/recent", {})
      .then(function(response) {
        dispatch(saveRecentData(response.data));

        dispatch(isRetrievingData(false));
      })
      .catch(function(error) {
        console.log(error);
      });
  };
};

export var getAlltimeCamperData = () => {
  return dispatch => {
    dispatch(isRetrievingData(true));
    axios
      .get("https://fcctop100.herokuapp.com/api/fccusers/top/alltime", {})
      .then(function(response) {
        dispatch(saveAlltimeData(response.data));

        dispatch(isRetrievingData(false));
      })
      .catch(function(error) {
        // console.log(error);
      });
  };
};

export var isRetrievingData = status => {
  return {
    type: "SET_IS_RETREIVING_DATA",
    status
  };
};

export var saveRecentData = data => {
  return {
    type: "SAVE_RECENT_DATA",
    data
  };
};

export var saveAlltimeData = data => {
  return {
    type: "SAVE_ALLTIME_DATA",
    data
  };
};
