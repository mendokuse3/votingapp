import React, {useState} from 'react';
import { Carousel, Button, ButtonGroup } from 'react-bootstrap';
import '../CSS/Questions.css'

function CarouselItem(props) {
    const [yesBTN, setYesBTN] = useState(false)
    const [noBTN, setNoBTN] = useState(false)
    const [maybeBTN, setMaybeBTN] = useState(false)

    const handleClickYes = (e) => {
        props.setUserScore('add')
        setNoBTN(false)
        setMaybeBTN(false)
        setYesBTN(true)
    }
    const handleClickNo = () => {
        props.setUserScore('subtract')
        setMaybeBTN(false)
        setYesBTN(false)
        setNoBTN(true)
    }
    const handleClickMaybe = () => {
        props.setUserScore('')
        setNoBTN(false)
        setYesBTN(false)
        setMaybeBTN(true)
    }

    const handleSubmit = () => {
        props.goToMatch()
        props.handleClick();
    }

    return (
        <Carousel.Item className={props.isActive === props.index ? 'active' : ''} >
            <img
                className='d-block w-100'
                src='https://user-images.githubusercontent.com/65630204/94851346-518d8780-03f6-11eb-852b-294f787973ee.png'
                alt='First slide'
            />
            <Carousel.Caption className='slide'>
                <h3 className='question-title'>{props.data.title}</h3>
                <p className='question-text'>{props.data.question}</p>
                {props.data.question && 
                    <ButtonGroup>
                        <div className='choices'>
                        <Button onClick={handleClickNo} disabled={noBTN ? true : false}>
                            Disagree
                        </Button>
                        <Button onClick={handleClickYes} disabled={yesBTN ? true : false}>
                            Agree
                        </Button>
                        </div>
                        <Button className='maybe' onClick={handleClickMaybe} disabled={maybeBTN ? true : false}>
                            I am not sure where I stand on this
                        </Button>
                    </ButtonGroup>
                }
                {!props.data.question && 
                    <Button className='submit-questions' onClick={() => handleSubmit()}>Submit</Button>
                }
                <img className='footer-image' src='https://user-images.githubusercontent.com/65630204/94857203-222f4880-03ff-11eb-8d5f-5568378c8d4f.png' alt='candy' />
            </Carousel.Caption>
        </Carousel.Item>
        
    )
}

export default CarouselItem;