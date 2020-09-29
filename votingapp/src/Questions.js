import React,{useState} from 'react';


function Questions(props) {
const [userScore, setUserScore] = useState(0); 


    const handleClickYes = () => {
        setUserScore(userScore + 1) 
    }
    const handleClickNo = () => {
        setUserScore(userScore - 1) 
     }
    const handleClickMaybe = () => {
        setUserScore(userScore) 
     }     
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

            </div>


            </div>
    );
}

export default Questions;