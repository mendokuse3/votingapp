import React from 'react';
import './CSS/Match.css'
import candidateData from './data/candidateData';


function Match(props) {
    const candidate = candidateData.find(c => c.name.includes(props.candidate) )
    console.log(props)
    const goToLink = () => {
        props.goToCandidate(props.candidateIndex, true);
    }
    return (
        <div className='matchPage'>

            <div className='matchMessage'>It's a Match!</div>
            <img className='matchImg'src={candidate.matchImg} alt={candidate.name} />
            <div className='percentDisplay'>{props.matchScore}%</div>
            <div className='name'>{candidate.name}</div>
            <div className='party'>{candidate.party}</div>
            <button onClick={() => goToLink()} className='bottomProfileBtn'>View Profile</button>
            
        </div>
    );
}

export default Match;