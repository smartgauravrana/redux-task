import React from 'react';
import './ActionButtons.css';

const ActionButtons = ({ onActionClick }) => {
    return (
        <div className="btn-container">
            <button className="btn btn-New" onClick={() => onActionClick('New')}><i className="fa fa-plus" aria-hidden="true"></i> New</button>
            <button className="btn btn-Edit" onClick={() => onActionClick('Edit')}><i className="fa fa-pencil" aria-hidden="true"></i> Edit</button>
            <button className="btn btn-Delete" onClick={() => onActionClick('Delete')}><i className="fa fa-trash-o" aria-hidden="true"></i> Delete</button>
        </div>
    )
}

export default ActionButtons;