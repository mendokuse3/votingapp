import React from 'react';
import Candidate from './Candidate';
import candidateData from '../data/candidateData';


function Candidates({selectedCandidate}) {
    return (
        <div>
            {candidateData.map((cand, i) => {
                if(selectedCandidate == i){
                    return (
                    <Candidate key={i} data={cand} />
                    )
                }
                return
            })}
        </div>
    );
}

export default Candidates;