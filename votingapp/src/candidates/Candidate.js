import React from 'react';

function Candidate(props) {
    return (
        <div>
            <h2>{props.data.name}</h2>
            <img src={props.data.img} alt='asldjfdf'/>
            <p>{props.data.blurb}</p>
            <a href={props.data.website}>Go To Their Website</a>
        </div>
    );
}

export default Candidate;