
import * as actionTypes from '../constants/actionTypes';
import * as bookApi from '../api/bookApi';

export const getBooks = () => (dispatch, getState) => {

  dispatch({
    type: actionTypes.ACTION_GET_BOOKS_STARTED
  })

  bookApi
    .getBooks()
    .then(
      response => {
        response
          .text()
          .then(
            value => {
              const responseObject = JSON.parse(value);
              console.log(responseObject);
              dispatch({
                type: actionTypes.ACTION_GET_BOOKS_SUCCESS,
                books: responseObject,
              });
            }
          );
      }
    )

}
