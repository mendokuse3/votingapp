import React from 'react';

function Candidate(props) {
    return (
        <div>
            <h2>{props.data.name}</h2>
            <img src={props.data.img} alt='asldjfdf'/>
            <ul>
                {props.data.policies.map((policy) => {
                    return (
                        <li>{policy || 'this is a policy'}</li>
                    )
                })}
            </ul>
        </div>
    );
}

export default Candidate;