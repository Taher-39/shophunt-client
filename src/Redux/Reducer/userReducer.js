import {
  USER_LOGIN_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT,
  USER_PROFILE_DETAILS_FAIL,
  USER_PROFILE_DETAILS_REQUEST,
  USER_PROFILE_DETAILS_SUCCESS,
  USER_PROFILE_UPDATE_FAIL,
  USER_PROFILE_UPDATE_REQUEST,
  USER_PROFILE_UPDATE_SUCCESS,
  USER_RESISTER_FAIL,
  USER_RESISTER_REQUEST,
  USER_RESISTER_SUCCESS,
} from "../Constant/userConstant";

export const userLoginReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_LOGIN_REQUEST:
      return { loading: true };
    case USER_LOGIN_SUCCESS:
      return { loading: false, userInfo: action.payload };
    case USER_LOGIN_FAIL:
      return { loading: false, error: action.payload };
    case USER_LOGOUT:
      return {};
    default:
      return state;
  }
};


export const userResisterReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_RESISTER_REQUEST:
    return { loading: true };
    case USER_RESISTER_SUCCESS:
      return { loading: false, userInfo: action.payload };
    case USER_RESISTER_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const userDetailsReducer = (state = { user: {} }, action) => {
  switch (action.type) {
    case USER_PROFILE_DETAILS_REQUEST:
    return { ...state, loading: true };
    case USER_PROFILE_DETAILS_SUCCESS:
      return { loading: false, user: action.payload };
    case USER_PROFILE_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const userProfileUpdateReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_PROFILE_UPDATE_REQUEST:
    return { loading: true };
    case USER_PROFILE_UPDATE_SUCCESS:
      return { loading: false, success: true, userInfo: action.payload };
    case USER_PROFILE_UPDATE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

