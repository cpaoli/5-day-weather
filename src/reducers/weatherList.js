import {ADD_CITY, START_LOADING} from '../actions'
export const weatherList = (state = [], action) => {
    switch (action.type) {
        case ADD_CITY:
            return (action.payload.data)? [...state, action.payload] : (alert("La città inserita non esiste negli USA"), state)
        default:
            return state;
    }
};

export const isLoading = (state = false, action) => {
    switch (action.type) {
        case START_LOADING:
          return true;
        case ADD_CITY:
          return false;
        default:
          return state;
      }
}