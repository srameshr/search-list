import { searchUsers } from '../../utils/user-search';
import {
  GET_USERS_LOADING, // NON-AJAX call. So chucking this import
  GET_USERS_SUCCESS,
  GET_USERS_ERROR,
} from '../types';

/*
  A simple NON-AJAX method to get user data that is mocked locally.
  Decided to skip making an ajax request with axios/fetch for time constraints etc.
*/
export const getUsers = ({ query = '' }) => async (dispatch) => {
  try {
    dispatch({
      type: GET_USERS_SUCCESS,
      payload: query && query.length > 1 ? searchUsers(query): []
    });

  } catch (e) {
    dispatch({
      type: GET_USERS_ERROR,
      payload: {
        msg: e.message
      }
    });
  }
};