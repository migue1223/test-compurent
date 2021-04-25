import { types } from '../types/types';

export const authReducer = (state = {}, action) => {
  switch (action.type) {
    case types.login:
      return {
        ...state,
        token: action.payload.token,
        user: action.payload.user,
        logged: true,
      };

    case types.logout:
      return {
        ...state,
        token: null,
        user: null,
        logged: false,
        errorMessage: action.payload,
      };

    default:
      return state;
  }
};
