import React, { Component } from 'react';
import { connect } from 'react-redux';
import './BrowseTrips.scss';
import { addTrip } from '../../redux/trips/trips.actions'

class BrowseTrips extends Component {
    constructor(props) {
        super(props);
        // Don't call this.setState() here!
        this.state = {
            tripList: []
        };

        this.renderTripList = this.renderTripList().bind(this);
    }
    render() {
        return (
            <div className="plan-trip-body">
                <h1 className="header">Create a new trip!</h1>
                <div>
                    {this.renderTripList()}
                </div>
            </div>
        );
    }

    renderTripList(){
        let trips = [];
        this.state.tripList.map(trip => {
            trips.push(<div>{trip.address}</div>)
        })
        return trips
    }
}

const mapStateToProps = state => ({
    trips: state.trips
});

export default connect(mapStateToProps, null)(BrowseTrips);
