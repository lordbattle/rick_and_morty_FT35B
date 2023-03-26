import {
  ADD_FAVORITES,
  DELETE_FAVORITES,
  FILTER,
  ORDER,
  ERROR,
  GET_FAVORITES,
} from "./action-type";

import axios from "axios";

export function addFavorites(character) {
  return async function (dispatch) {
    try {
      const response = await axios.post(
        "http://localhost:3001/rickandmorty/favs",
        character
      );
      return dispatch({
        type: ADD_FAVORITES,
        payload: response.data,
      });
    } catch (error) {
      return dispatch({
        type: ERROR,
        payload: error,
      });
    }

    //Con Promesa
    /* axios
      .post("http://localhost:3001/rickandmorty/favs", character)
      .then((response) => {
        return dispatch({ type: ADD_FAVORITES, payload: response.data });
      }); */
  };
}

export function deleteFavorites(id) {
  return async function (dispatch) {
    try {
      const { data } = await axios.delete(
        `http://localhost:3001/rickandmorty/favs/${id}`
      );
      return dispatch({
        type: DELETE_FAVORITES,
        payload: data,
      });
    } catch (error) {
      return dispatch({
        type: ERROR,
        payload: error,
      });
    }

    /* axios
      .delete(`http://localhost:3001/rickandmorty/favs/${id}`)
      .then((response) => {
        return dispatch({
          type: DELETE_FAVORITES,
          payload: response.data,
        });
      }); */
  };
}

export function getFavorites() {
  return async function (dispatch) {
    try {
      const response = await axios.get(`http://localhost:3001/rickandmorty/favs`);
      return dispatch({
        type: GET_FAVORITES,
        payload: response.data,
      });
    } catch (error) {
      return dispatch({
        type: ERROR,
        payload: error,
      });
    }
  };
}

export function filterCards(gender) {
  return {
    type: FILTER,
    payload: gender,
  };
}

export function orderCards(id) {
  return {
    type: ORDER,
    payload: id,
  };
}
