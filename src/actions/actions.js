import axios from 'axios'

export var setSelection = selection => {
  return {
    type: 'SET_SELECTION',
    selection
  }
}

export var getRecentCamperData = () => {
  return dispatch => {
    axios
      .get('https://fcctop100.herokuapp.com/api/fccusers/top/recent', {})
      .then(function (response) {
        console.log(response)
      })
      .catch(function (error) {
        console.log(error)
      })
  }
}

export var getAllTimeCamperData = () => {
  return dispatch => {
    axios
        .get('https://fcctop100.herokuapp.com/api/fccusers/top/alltime', {})
        .then(function (response) {
          console.log(response)
        })
        .catch(function (error) {
          console.log(error)
        })
  }
}
