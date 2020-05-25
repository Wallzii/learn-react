import React from 'react';

const userOutput = props => {
    return (
        <div>
            <p>This component will test user output. The username will be collected via the <code>UserInput</code> component and then be displayed here.</p>
            <p>Username: {props.username}</p>
        </div>
    )
};

export default userOutput;