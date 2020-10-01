import React from 'react';
import './CSS/Match.css'

function Match(props) {
    return (
        <div className='matchPage'>
            <div className='top'>
                <img src='https://user-images.githubusercontent.com/65630204/94823895-60fad980-03d2-11eb-9a09-6352d70d18b2.png' />
                <img className='homeNav' src='https://user-images.githubusercontent.com/65630204/94823954-73751300-03d2-11eb-947d-4ede058d4160.png' />

            </div>

            <h1 className='match'>It's a Match!</h1>
            <img src='https://user-images.githubusercontent.com/65630204/94753361-06269b00-035c-11eb-90dc-e9031fc83a28.png' alt='' />
            <div className='percentDisplay'>percent</div>
            <div>Joe</div>
            <div>Democrat</div>
            <button className='bottomProfileBtn'>View Profile</button>

        </div>
    );
}

export default Match;