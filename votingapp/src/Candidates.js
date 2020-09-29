import React from 'react';
import Candidate from './Candidate';

const dummyINfo = {
    name: 'turnip Duck',
    img: 'https://media.istockphoto.com/photos/happy-mixed-breed-dog-posing-with-a-kitten-on-his-head-picture-id1210341751',
    policies: ['1', '2', '3']
}

function Candidates(props) {
    return (
        <div>
            <Candidate data={dummyINfo}/>
        </div>
    );
}

export default Candidates;