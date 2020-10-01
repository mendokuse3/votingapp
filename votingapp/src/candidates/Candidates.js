import React from 'react';
import Candidate from './Candidate';
import candidateData from '../data/candidateData';
import Nav from '../navbar/Nav';


function Candidates({selectedCandidate, goToDash}) {
    return (
        <div>
            <Nav goToDash={goToDash} />
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