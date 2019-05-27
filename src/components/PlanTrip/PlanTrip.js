import React, { Component } from 'react';
import './PlanTrip.scss';
import EditTextAddress from '../EditTextAddress/EditTextAddress'

class PlanTrip extends Component {
    render() {
        return (
            <div className="plan-trip-body">
                <h1 className="header">Create a new trip!</h1>
                <div>
                    <EditTextAddress/>
                    <EditTextAddress/>
                    <EditTextAddress/>
                    <EditTextAddress/>
                    <EditTextAddress/>
                    <EditTextAddress/>
                    <EditTextAddress/>
                </div>
                <div>
                    <button>Save Trip</button>
                </div>
            </div>
        );
    }
}

export default PlanTrip;
