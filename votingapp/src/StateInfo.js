import React from 'react';

function StateInfo({stateInfo}) {
    return (
        <div>
            <h3>{stateInfo.name}</h3>
            <a href={stateInfo.url}>Go To Link</a>
        </div>
    );
}

export default StateInfo;