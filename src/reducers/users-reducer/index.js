import {
    GET_USERS_LOADING,
    GET_USERS_SUCCESS,
    GET_USERS_ERROR,
  } from '../../actions/types';

  const INITIAL_STATE = {
    getUsers: {
      loading: false,
      success: {
        ok: false,
        data: null,
      },
      errors: {
        error: false,
        msg: '',
      },
    },
  };


export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case GET_USERS_LOADING:
      return {
        ...state,
        getUser: {
          ...state.getUser,
          loading: true,
          reset: false,
          success: {
            ...state.getUser.success,
            ok: false,
          },
          errors: {
            ...state.getUser.errors,
            error: false,
          },
        },
      };
    case GET_USERS_SUCCESS:
      return {
        ...state,
        getUser: {
          ...state.getUser,
          loading: false,
          reset: false,
          success: {
            ...state.getUser.success,
            ok: true,
            data: action.payload,
          },
          errors: {
            ...state.getUser.errors,
            error: false,
          },
        },
      };
    case GET_USERS_ERROR:
      return {
        ...state,
        getUser: {
          ...state.getUser,
          loading: false,
          reset: false,
          success: {
            ...state.getUser.success,
            ok: false,
          },
          errors: {
            ...state.getUser.errors,
            error: true,
            msg: action.payload,
          },
        },
      };
      default:
        return { ...state };
    }
}