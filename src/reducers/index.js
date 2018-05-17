import {combineReducers} from 'redux';
import {weatherList, isLoading} from './weatherList'

export default combineReducers({
    weatherList,
    isLoading
});