import { combineReducers } from 'redux';
import tripsReducer from './trips/trips.reducer'


export default combineReducers({
    trips: tripsReducer
});

