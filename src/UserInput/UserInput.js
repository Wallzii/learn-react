import React from 'react';
import './UserInput.css';

const userInput = props => {
    return (
        <div className="UserInput">
            <label>Input:</label>
            <input type="text" onChange={props.changed} value={props.inputValue}/>
        </div>
    )
};

export default userInput;