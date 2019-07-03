export const artistReducer = (state = [], action) => {
    switch (action.type) {
      case "DISPLAY_PROFILE_BY_ID":
        return {
          ...state,
          profileData: action.profileData
        };
      case "GET_PROFILE_SCHEMA":
        console.log(state)
        console.log(action.profileSchema)
        return {
          ...state,
          profileSchema: action.profileSchema
         };
      case "SAVE_PROFILE_BY_ID_DATA":
        console.log(state)
        return {
          ...state,
          profileData: action.profileData
        };
      default:
        return state;
    }
  };  