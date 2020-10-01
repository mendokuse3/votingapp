import React from 'react';
import './CSS/StateInfo.css'

function StateInfo({stateInfo}) {
    console.log(stateInfo)
    return (
			<div className='stateInfoContainer'>
			
			{stateInfo.online && <h4 className='stateInfoContainer'>Online registration deadline<br/>
			{stateInfo.online}</h4>}
			
			{stateInfo.mailIn && <h4 className='stateInfoContainer'>Mail-in registration deadline<br />
			{stateInfo.mailIn}</h4>}
			
			{stateInfo.inPerson && <h4 className='stateInfoContainer'>In-Person registration deadline<br />
			{stateInfo.inPerson}</h4>} 

			{stateInfo.general && <h4 className='stateInfoContainer'>General Election Day<br />
			{stateInfo.general}</h4>} 
			
			<button className='stateInfoButton' href={stateInfo.url}>REGISTER ONLINE</button>
			</div>
		);
}

export default StateInfo;