export const authenticReducer = (state = [], action) => {
    switch (action.type) {
      case "SIGNUP_SUCCESS":
        return {
          ...state,
          payload: action.payload
        };
      case "SIGNUP_ERROR":
            return {
            ...state,
            payload: action.payload
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
      default:
        return state;
    }
  };
  