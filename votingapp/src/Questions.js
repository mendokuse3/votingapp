import React,{useState} from 'react';
import Carousel from 'react-bootstrap/Carousel'


function Questions(props) {
const [userScore, setUserScore] = useState(0); 
const [userCandi, setUserCandi] = useState(' '); 

    const trumpScore = -7;
    const harrisScore = -2;
    // const penceScore = 0;
    // const bidenScore = 5;
    

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

    // can create an array with all the questions and map through it, returning carousel.item's for cleaner code
    return (
        <div>
            <div>
            <Carousel interval={null} >
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="https://images.unsplash.com/photo-1468657988500-aca2be09f4c6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
                    alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>First Question</h3>
                        <button onClick={handleClickYes}>Yes</button>
                        <button onClick={handleClickNo}>No</button>
                        <button onClick={handleClickMaybe}>Maybe</button>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="https://images.unsplash.com/photo-1468657988500-aca2be09f4c6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
                    alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>First Question</h3>
                        <button onClick={handleClickYes}>Yes</button>
                        <button onClick={handleClickNo}>No</button>
                        <button onClick={handleClickMaybe}>Maybe</button>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="https://images.unsplash.com/photo-1468657988500-aca2be09f4c6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
                    alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>First Question</h3>
                        <button onClick={handleClickYes}>Yes</button>
                        <button onClick={handleClickNo}>No</button>
                        <button onClick={handleClickMaybe}>Maybe</button>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="https://images.unsplash.com/photo-1468657988500-aca2be09f4c6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
                    alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>First Question</h3>
                        <button onClick={handleClickYes}>Yes</button>
                        <button onClick={handleClickNo}>No</button>
                        <button onClick={handleClickMaybe}>Maybe</button>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="https://images.unsplash.com/photo-1468657988500-aca2be09f4c6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
                    alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>First Question</h3>
                        <button onClick={handleClickYes}>Yes</button>
                        <button onClick={handleClickNo}>No</button>
                        <button onClick={handleClickMaybe}>Maybe</button>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="https://images.unsplash.com/photo-1468657988500-aca2be09f4c6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
                    alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>First Question</h3>
                        <button onClick={handleClickYes}>Yes</button>
                        <button onClick={handleClickNo}>No</button>
                        <button onClick={handleClickMaybe}>Maybe</button>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="https://images.unsplash.com/photo-1468657988500-aca2be09f4c6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
                    alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>First Question</h3>
                        <button onClick={handleClickYes}>Yes</button>
                        <button onClick={handleClickNo}>No</button>
                        <button onClick={handleClickMaybe}>Maybe</button>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="https://images.unsplash.com/photo-1468657988500-aca2be09f4c6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
                    alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>First Question</h3>
                        <button onClick={handleClickYes}>Yes</button>
                        <button onClick={handleClickNo}>No</button>
                        <button onClick={handleClickMaybe}>Maybe</button>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="https://images.unsplash.com/photo-1468657988500-aca2be09f4c6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
                    alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>First Question</h3>
                        <button onClick={handleClickYes}>Yes</button>
                        <button onClick={handleClickNo}>No</button>
                        <button onClick={handleClickMaybe}>Maybe</button>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="https://images.unsplash.com/photo-1468657988500-aca2be09f4c6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
                    alt="Third slide"
                    />
                    <Carousel.Caption>
                        <button onClick={handleClick}>Who's my Candi?</button>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
                {/* <ul>
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
                    

                </ul> */}
            </div>


            </div>
    );
}

export default Questions;