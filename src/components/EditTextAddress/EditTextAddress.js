import React, { Component } from 'react';
import './EditTextAddress.scss';

class EditTextAddress extends Component {
    render() {
        return (
            <div className="edit-text-address-main-body">
                <input placeholder="type in the address of your destination!" className="main-input" type="text"/>
            </div>
        );
    }
}

export default EditTextAddress;
