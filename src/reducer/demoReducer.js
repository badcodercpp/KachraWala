export const demoReducer = (state = [], action) => {
  switch (action.type) {
    case "DEMO_ACTION":
      return {
        ...state,
        name: action.name
      };
    case "TOGGLE_NAME":
      return {
        ...state,
        name: action.name
      };
    default:
      return state;
  }
};
