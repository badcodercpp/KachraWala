export const homeReducer = (state = [], action) => {
  switch (action.type) {
    case "HOME_ACTION":
      return {
        ...state,
        name: action.name
      };
    case "SAVE_AUTHENTIC_DATA":
      return {
        ...state,
        authenticData: action.authenticData
      };
    case "SIGNUP_ERROR":
          return {
          ...state,
          error: action.error
      };
      case "LOGIN_SUCCESS":
      return {
        ...state,
        payload: action.payload
      };
    case "LOGIN_ERROR":
          return {
          ...state,
          payload: action.payload
      };
    case "SAVE_PING_DATA":
    console.log("save ping data method")
    console.log(action)
    console.log({
      ...state,
      pingData: action.pingData
    })
      return {
        ...state,
        pingData: action.pingData
      };
    case "SAVE_CATEGORY_DATA":
      return {
      ...state,
      categoryData: action.categoryData
    };
    default:
      return state;
  }
};
