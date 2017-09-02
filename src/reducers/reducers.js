export var camperReducer = (
  state = {
    selection: "alltime",
    allTimeCampers: [
      {
        username: "Loading",
        img: "https://www.freecodecamp.com/design-style-guide/img/freeCodeCamp.svg",
        alltime: 42,
        recent: 11,
        lastUpdate: "2017-08-28T12:02:59.754Z"
      },
      {
        username: "Loading",
        img: "https://www.freecodecamp.com/design-style-guide/img/freeCodeCamp.svg",

        alltime: 42,
        recent: 11,
        lastUpdate: "2017-08-28T12:02:59.754Z"
      },
      {
        username: "Loading",
        img: "https://www.freecodecamp.com/design-style-guide/img/freeCodeCamp.svg",

        alltime: 42,
        recent: 11,
        lastUpdate: "2017-08-28T12:02:59.754Z"
      },
      {
        username: "Loading",
        img: "https://www.freecodecamp.com/design-style-guide/img/freeCodeCamp.svg",

        alltime: 42,
        recent: 11,
        lastUpdate: "2017-08-28T12:02:59.754Z"
      },
      {
        username: "Loading",
        img: "https://www.freecodecamp.com/design-style-guide/img/freeCodeCamp.svg",

        alltime: 42,
        recent: 11,
        lastUpdate: "2017-08-28T12:02:59.754Z"
      }
    ],
    recentCampers: [],
    isRetreivingData: false
  },
  action
) => {
  switch (action.type) {
    case "SET_SELECTION":
      return { ...state, selection: action.selection };
    case "SET_IS_RETRIEVING_DATA":
      return { ...state, status: action.status };
    case "SAVE_ALLTIME_DATA":
      return { ...state, allTimeCampers: action.data };
    case "SAVE_RECENT_DATA":
      return { ...state, recentCampers: action.data };
    default:
      return state;
  }
};
