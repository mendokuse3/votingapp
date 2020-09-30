import React,{ useState, useRef } from 'react';
import {Carousel, Button, ButtonGroup} from 'react-bootstrap'
function Questions(props) {
    let btnRef = useRef()
    const [userScore, setUserScore] = useState(0); 
    const [userCandi, setUserCandi] = useState(' '); 

    const trumpScore = -9.5;
    const harrisScore = 9.5;
    const penceScore = -10;
    const bidenScore = 7;
    console.log(btnRef)
    
const handleClickYes = (e) => {
    setUserScore(userScore + 1)
    if(btnRef.current){
btnRef.current.setAttribute("disabled", "disabled");
}
}
const handleClickNo = () => {
    setUserScore(userScore - 1)
    if (btnRef.current) {
			btnRef.current.setAttribute('disabled', 'disabled');
		} 
    }
    const handleClickMaybe = () => {
        setUserScore(userScore)
        if (btnRef.current) {
					btnRef.current.setAttribute('disabled', 'disabled');
				} 
    }

     const handleClick = () =>{
         if(userScore>=penceScore && userScore<trumpScore){
            setUserCandi('Pence')
        } else if (userScore >= trumpScore && userScore < 1.25) {
            setUserCandi('Trump')
        } else if (userScore>=1.25 && userScore<=bidenScore) {
            setUserCandi('Biden')
        } else {
            setUserCandi('Harris')
        }
    }
    console.log(userCandi)
    console.log(userScore)

    // can create an array with all the questions and map through it, returning carousel.item's for cleaner code
    return (
			<div>
				<div>
					<Carousel interval={null}>
						<Carousel.Item>
							<img
								className='d-block w-100'
								src='https://images.unsplash.com/photo-1468657988500-aca2be09f4c6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80'
								alt='First slide'
							/>
							<Carousel.Caption>
								<h3>First Question</h3>
                                <ButtonGroup>

								<Button onClick={handleClickYes} ref={btnRef}>
									Yes
								</Button>
								<Button onClick={handleClickNo} ref={btnRef}>
									No
								</Button>
								<Button onClick={handleClickMaybe} ref={btnRef}>
									Maybe
								</Button>
                                </ButtonGroup>
							</Carousel.Caption>
						</Carousel.Item>
						<Carousel.Item>
							<img
								className='d-block w-100'
								src='https://images.unsplash.com/photo-1468657988500-aca2be09f4c6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80'
								alt='Third slide'
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
								className='d-block w-100'
								src='https://images.unsplash.com/photo-1468657988500-aca2be09f4c6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80'
								alt='Third slide'
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
								className='d-block w-100'
								src='https://images.unsplash.com/photo-1468657988500-aca2be09f4c6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80'
								alt='Third slide'
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
								className='d-block w-100'
								src='https://images.unsplash.com/photo-1468657988500-aca2be09f4c6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80'
								alt='Third slide'
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
								className='d-block w-100'
								src='https://images.unsplash.com/photo-1468657988500-aca2be09f4c6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80'
								alt='Third slide'
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
								className='d-block w-100'
								src='https://images.unsplash.com/photo-1468657988500-aca2be09f4c6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80'
								alt='Third slide'
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
								className='d-block w-100'
								src='https://images.unsplash.com/photo-1468657988500-aca2be09f4c6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80'
								alt='Third slide'
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
								className='d-block w-100'
								src='https://images.unsplash.com/photo-1468657988500-aca2be09f4c6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80'
								alt='Third slide'
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
								className='d-block w-100'
								src='https://images.unsplash.com/photo-1468657988500-aca2be09f4c6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80'
								alt='Third slide'
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