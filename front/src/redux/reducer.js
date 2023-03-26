import {
  ADD_FAVORITES,
  DELETE_FAVORITES,
  FILTER,
  ORDER,
  ERROR,
  GET_FAVORITES,
} from "./action-type";
/* import { addfavorites, deleteFavorites } from "./action"; */

const initialState = {
  myFavorites: [],
  allCharacters: [],
  errors: {},
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FAVORITES:
      return {
        ...state,
        //myFavorites: [...state.myFavorites, action.payload],
        //allCharacters: [...state.allCharacters, action.payload],
        myFavorites: action.payload,
        allCharacters: action.payload,
        errors: {},
      };
    case DELETE_FAVORITES:
      // let filtrarPj = state.myFavorites.filter(
      //   (personaje) => personaje.id !== action.payload
      // );
      return {
        ...state,
        //myFavorites: filtrarPj,
        myFavorites: action.payload,
        errors: {},
      };
    case GET_FAVORITES:
      return {
        ...state,
        myFavorites: action.payload,
        errors: {},
      };
    case FILTER:
      const allCharsFilter = state.allCharacters.filter(
        (character) => character.gender === action.payload
      );
      return {
        ...state,
        myFavorites: allCharsFilter,
      };
    case ORDER:
      const orderCopy = [...state.allCharacters];
      const orderGender = orderCopy.sort((a, b) => {
        if (a.id > b.id) {
          return action.payload === "Ascendente" ? 1 : -1;
        }
        if (a.id < b.id) {
          return action.payload === "Ascendente" ? -1 : 1;
        } else return 0;
      });
      return {
        ...state,
        myFavorites: orderGender,
      };
    case ERROR:
      return {
        ...state,
        errors: action.payload,
      };
    default:
      return { ...state };
  }
};

export default reducer;
