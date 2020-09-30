import React,{ useState } from 'react';
import {Carousel, Button, ButtonGroup} from 'react-bootstrap'
function Questions(props) {
    const [userScore, setUserScore] = useState(0); 
    const [userCandi, setUserCandi] = useState(' '); 
    const [yesBTN, setYesBTN] = useState(false)
    const [noBTN, setNoBTN] = useState(false)
    const [maybeBTN, setMaybeBTN] = useState(false)

    const trumpScore = -9.5;
    const harrisScore = 9.5;
    const penceScore = -10;
    const bidenScore = 7;
    
    const handleClickYes = (e) => {
        setUserScore(userScore + 1)
        setNoBTN(false)
        setMaybeBTN(false)
        setYesBTN(true)
    }
    const handleClickNo = () => {
        setUserScore(userScore - 1)
        setMaybeBTN(false)
        setYesBTN(false)
        setNoBTN(true)
    }
    const handleClickMaybe = () => {
        setUserScore(userScore)
        setNoBTN(false)
        setYesBTN(false)
        setMaybeBTN(true)
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

								<Button onClick={handleClickYes} disabled={yesBTN ? true : false}>
									Yes
								</Button>
								<Button onClick={handleClickNo} disabled={noBTN ? true : false}>
									No
								</Button>
								<Button onClick={handleClickMaybe} disabled={maybeBTN ? true : false}>
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