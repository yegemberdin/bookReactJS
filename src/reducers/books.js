import { combineReducers } from 'redux';
import * as actionTypes from '../constants/actionTypes';
const initialState=[];

export default function books(state = initialState, action) {
  switch (action.type) {
    case actionTypes.ACTION_GET_BOOKS_SUCCESS:
      return action.books;
    case actionTypes.ACTION_GET_BOOKS_STARTED:
    case actionTypes.ACTION_GET_BOOKS_FAILED:
      return [];
    default:
      return state;
  }
};





