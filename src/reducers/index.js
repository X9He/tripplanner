import { combineReducers } from 'redux';
import TripReducer from './TripReducer'


export default combineReducers({
    // assigned EventsReducer to key of "events"
    events: TripReducer
});


