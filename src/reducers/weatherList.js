import {ADD_CITY} from '../actions'
const weatherList = (state = [], action) => {
    switch (action.type) {
        case ADD_CITY:
            return (action.payload.data)? [...state, action.payload] : (alert("La città inserita non esiste negli USA"), state)
        default:
            return state;
    }
};

export default weatherList;