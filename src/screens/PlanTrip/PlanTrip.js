import React, { Component } from 'react';
import { connect } from 'react-redux';
import './PlanTrip.scss';
import EditTextAddress from '../../components/EditTextAddress/EditTextAddress'
import { addTrip } from '../../redux/trips/trips.actions'

class PlanTrip extends Component {
    constructor(props) {
        super(props);
        // Don't call this.setState() here!
        this.state = {
            tripList: []
        };

        this.addOneMoreTrip = this.addOneMoreTrip.bind(this);
        this.deleteLastTrip = this.deleteLastTrip.bind(this);
        this.saveTrip = this.saveTrip.bind(this);
    }
    render() {
        return (
            <div className="plan-trip-body">
                <h1 className="header">Create a new trip!</h1>
                <div>
                    {this.renderTripList()}
                </div>
                <div>
                    <button onClick={this.addOneMoreTrip}>Add One More Stop</button>
                    <button onClick={this.deleteLastTrip}>Delete Stop</button>
                    {/*<button>Generate Optimal Trip!</button>*/}
                    <button>Save Trip</button>
                </div>
            </div>
        );
    }

    renderTripList(){
        let trips = [];
        this.state.tripList.map(trip => {
            trips.push(<EditTextAddress address={trip.address}/>)
        })
        return trips
    }

    addOneMoreTrip(){
        this.setState((prevState, props) => {
            return {
                tripList: [ ...prevState.tripList, {
                    address: ""
                }]
            }
        })
    }

    deleteLastTrip(){
        this.setState((prevState, props) => {
            let array = [...prevState.tripList]; // make a separate copy of the array
            let index = array.length - 1;
            if (index !== -1) {
                array.splice(index, 1);
            }
            return {
                tripList: array
            }
        })
    }

    saveTrip(){
        this.props.addTrip(this.state.tripList);
    }
}

const mapStateToProps = state => ({
    trips: state.trips
});

const mapDispatchToProps = dispatch => ({
    addTrip: trip => dispatch(addTrip(trip))
});

export default connect(mapStateToProps, mapDispatchToProps)(PlanTrip);
