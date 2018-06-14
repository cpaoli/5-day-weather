import {combineReducers} from 'redux';
import {weatherList, isLoading, errorMessage} from './weatherList'

export default combineReducers({
    weatherList,
    isLoading,
    errorMessage
});