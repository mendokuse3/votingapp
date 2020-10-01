import React from 'react';
import './CSS/Home.css'

function Home(props) {
    return (
        <div className='homeContainer' onClick={() => props.goToDash()}>
           <header className='topImg'/>
        {/* <img className='topImg' src='https://user-images.githubusercontent.com/65630204/94737059-327def80-033b-11eb-82ec-c5b6289cb0c0.png'/> */}
        <img className='trumpMainCandi' src='https://user-images.githubusercontent.com/65630204/94746267-5eed3800-034a-11eb-8806-08c7f0a30983.png'/>
       
        <img className='bidenMainCandi' src='https://user-images.githubusercontent.com/65630204/94747127-36663d80-034c-11eb-841d-e49a44b9940d.png'/>
       
        <img className='harrisMainCandi' src='https://user-images.githubusercontent.com/65630204/94747453-f05da980-034c-11eb-98d5-d0e08257404a.png'/>
       
        <img className='penceMainCandi' src='https://user-images.githubusercontent.com/65630204/94747954-24859a00-034e-11eb-9e6e-6167a87e6ad6.png'/>
       
        <p className='candi'>CANDI<span className='date'>DATE</span></p>
        <p className='subHeader'>FIND YOUR POLITICAL MATCH</p>
        
        
        {/* <img className='bottomImg' src='https://user-images.githubusercontent.com/65630204/94737748-5ee63b80-033c-11eb-804c-64c5d766c7f5.png'/> */}
        {/* <footer className='bottomImg'/> */}
        </div>
    );
}

export default Home;