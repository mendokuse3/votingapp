import React,{useState} from 'react';


function Questions(props) {
const [userScore, setUserScore] = useState(0); 
const [userCandi, setUserCandi] = useState(' '); 

    const trumpScore = -7;
    const harrisScore = -2;
    const penceScore =0;
    const bidenScore =5;
    

    const handleClickYes = () => {
        setUserScore(userScore + 1) 
    }
    const handleClickNo = () => {
        setUserScore(userScore - 1) 
     }
    const handleClickMaybe = () => {
        setUserScore(userScore) 
     }     
     const handleClick = () =>{
         if(userScore>=trumpScore && userScore<harrisScore){
            setUserCandi('trump')
        }
     }
     console.log(userCandi);
     console.log(userScore);

    
    return (
        <div>
            <div>
                <ul>
                    <li>
                        Question1
                        
                    <button onClick={handleClickYes}>Yes</button>
                        <button onClick={handleClickNo}>No</button>
                        <button onClick={handleClickMaybe}>Maybe</button>

                    </li>
                    <li>
                        Question2
                    <button onClick={handleClickYes}>Yes</button>
                        <button onClick={handleClickNo}>No</button>
                        <button onClick={handleClickMaybe}>Maybe</button>


                    </li>
                    <li>
                        Question3
                    <button onClick={handleClickYes}>Yes</button>
                        <button onClick={handleClickNo}>No</button>

                        <button onClick={handleClickMaybe}>Maybe</button>

                    </li>
                    <li>
                        Question4
                        <button onClick={handleClickYes}>Yes</button>
                        <button onClick={handleClickNo}>No</button>
                        <button onClick={handleClickMaybe}>Maybe</button>

                    </li>

                    <li>
                        Question5
                        <button onClick={handleClickYes}>Yes</button>
                        <button onClick={handleClickNo}>No</button>
                        <button onClick={handleClickMaybe}>Maybe</button>


                    </li>

                    <li>
                        Question6
                        <button onClick={handleClickYes}>Yes</button>
                        <button onClick={handleClickNo}>No</button>
                        <button onClick={handleClickMaybe}>Maybe</button>

                    </li>
                    

                        <li>
                            Question7
                        <button onClick={handleClickYes}>Yes</button>
                        <button onClick={handleClickNo}>No</button>
                        <button onClick={handleClickMaybe}>Maybe</button>

                        </li>
                    

                </ul>
            <button onClick={handleClick}>Who's my Candi?</button>
            </div>


            </div>
    );
}

export default Questions;