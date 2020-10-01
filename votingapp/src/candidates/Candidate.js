import React from 'react';
import '../CSS/Candidate.css'



function Candidate(props) {
    let handleSubmit = (e)=>{
        e.preventDefault()
        props.goToQuestions()
    }
    return (
        <div className='candidatePage'>

            <img
                className='profileImg'
                src={props.data.profileImg}
                alt='' />
            <h2 className='candidateName'>{props.data.name}</h2>
            <h2 className='candidateParty'>{props.data.party}</h2>
            <p className='candidateBlurb'>{props.data.blurb}</p>

            <form>
                <button
                    type='submit'
                    onClick={(e) => handleSubmit(e)}
                    className='candiMatchButton'>
                    See If You Match
                </button>

            </form>



            <form action={props.data.website}>
                <button
                    type='submit' className='candiMainButton' >
                    Go To Their Website
                </button>
            </form>

        </div>
    );
}

export default Candidate;