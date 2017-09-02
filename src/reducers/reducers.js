export var camperReducer = (state = { selection: "", allTimeCampers: [], recentCampers: [] }, action) => {
  switch (action.type) {
    case "SET_SELECTION":
      return { ...state, selection: action.selection };
    default:
      return state;
  }
};
