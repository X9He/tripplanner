const INITIAL_STATE = {
    allTrips: []
};


const TripReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'ADD_TRIP':
            return {
                ...state,
                allTrips: [...state.allTrips, action.payload]
            };
        default:
            return state;
    }
};

export default TripReducer;
