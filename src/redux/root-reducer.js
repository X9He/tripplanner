import { combineReducers } from 'redux';
import TripReducer from './trip/TripReducer'


export default combineReducers({
    trips: TripReducer
});

