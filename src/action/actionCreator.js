import {
  DEMO_ACTION,
  HOME_ACTION,
  TOGGLE_NAME,
  DISPLAY_PROFILE_BY_ID,
  SAVE_AUTHENTIC_DATA, 
  GET_PROFILE_SCHEMA,
  SAVE_PING_DATA,
  SAVE_PROFILE_BY_ID_DATA,
  SAVE_CATEGORY_DATA
} from "./actionTypes";
//import thunk from 'redux-thunk'


export const DEMO_ACTION_CREATOR = payload => {
  return {
    type: DEMO_ACTION,
    payload
  };
};

//HOME_ACTION_CREATOR

export const HOME_ACTION_CREATOR = payload => {
  return {
    type: HOME_ACTION,
    payload
  };
};

export const TOGGLE_NAME_METHOD = name => {
  return {
    type: TOGGLE_NAME,
    name: name
  };
};
export const DISPLAY_PROFILE_BY_ID_METHOD = profileData => {
  return {
    type: DISPLAY_PROFILE_BY_ID,
    profileData: profileData
  };
};

export const SAVE_AUTHENTIC_DATA_METHOD = authenticData => {
  return {
    type: SAVE_AUTHENTIC_DATA,
    authenticData: authenticData
  }
}

export const GET_PROFILE_SCHEMA_METHOD = profileSchema => {
  return {
    type: GET_PROFILE_SCHEMA,
    profileSchema: profileSchema.profileSchema.data
  };
};

export const SAVE_PING_DATA_METHOD = pingData => {
  return {
    type: SAVE_PING_DATA,
    pingData: pingData.pingData
  };
};

export const SAVE_PROFILE_BY_ID_DATA_METHOD = profileData => {
  return {
    type: SAVE_PROFILE_BY_ID_DATA,
    profileData: profileData.profileData
  };
};


export const SAVE_CATEGORY_DATA_METHOD = categoryData => {
  return {
    type: SAVE_CATEGORY_DATA,
    categoryData: categoryData.categoryData
  };
};