import userTypes from './user.types';

const initialState = {
  currentUser: null,
  signInSuccess: false,
  signUpError: [],
  signUpSuccess: false,
  resetPasswordSuccess: false,
  resetPasswordError: [],
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case userTypes.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload,
      };
    case userTypes.SIGN_IN_SUCCESS:
      return {
        ...state,
        signInSuccess: action.payload,
      };
    case userTypes.SIGN_UP_SUCCESS:
      return {
        ...state,
        signUpSuccess: action.payload,
      };
    case userTypes.SIGN_UP_ERROR:
      return {
        ...state,
        signUpError: action.payload,
      };
    case userTypes.RESET_PASSWORD_SUCCESS:
      return {
        ...state,
        resetPasswordSuccess: action.payload,
      };
    case userTypes.RESET_PASSWORD_ERROR:
      return {
        ...state,
        resetPasswordError: action.payload,
      };
    case userTypes.RESET_AUTH_FORMS:
      return {
        ...state,
        signUpError: [],
        signInSuccess: false,
        signUpSuccess: false,
        resetPasswordSuccess: false,
        resetPasswordError: [],
      };
    default:
      return state;
  }
};

export default userReducer;
