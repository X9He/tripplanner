import React, { Component } from 'react';
import './EditTextAddress.scss';

class EditTextAddress extends Component {
    render() {
        return (
            <div className="edit-text-address-main-body">
                <input className="main-input" type="text"/>
                <i className="icons far fa-plus-square"></i>
                <i className="icons far fa-minus-square"></i>
            </div>
        );
    }
}

export default EditTextAddress;
