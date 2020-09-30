import React from 'react';
import Candidate from './Candidate';
import candidateData from '../data/candidateData';


function Candidates(props) {
    return (
        <div>
            {candidateData.map((cand, i) => {
                return (
                    <Candidate key={i} data={cand} />
                )
            })}
        </div>
    );
}

export default Candidates;