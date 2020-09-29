import React from 'react';

function StateInfo(props) {
    console.log(props)
    return (
        <div>
            <p>Info</p>
            <p>info part 2</p>
            <a href={props.stateURL}>Go To Link</a>
        </div>
    );
}

export default StateInfo;