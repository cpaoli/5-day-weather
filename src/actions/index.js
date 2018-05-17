import axios from 'axios';

const API_KEY = "6a78596d062df78380eff5944c4e5567";
const ROOT_URL = `https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;
export const ADD_CITY = "ADD_CITY";
export const START_LOADING = 'START_LOADING';


export const addCity  = (city) => {
        const url = `${ROOT_URL}&q=${city},us`;
        const request = axios.get(url);
        return {
            type: ADD_CITY,
            payload: request
        }
}

export const loader = () => {
    return {
        type: START_LOADING
    }
}