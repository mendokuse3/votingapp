import React from 'react';

function StateInfo({stateInfo}) {
    console.log(stateInfo)
    return (
			<div>
				<h3>{stateInfo.name}</h3>
				<h4>Online Registration: {stateInfo.online}</h4>
				<h4>Mail-in Registration: {stateInfo.mailIn}</h4>
				<h4>In-Person Registration:  {stateInfo.inPerson}</h4>
				<h4>General Election Day: {stateInfo.general}</h4>
				<a href={stateInfo.url}>Go To Link</a>
			</div>
		);
}

export default StateInfo;