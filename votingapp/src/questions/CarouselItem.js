import React, {useState} from 'react';
import { Carousel, Button, ButtonGroup } from 'react-bootstrap';

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

    return (
        <Carousel.Item className={props.isActive === props.index ? 'active' : ''} >
            <img
                className='d-block w-100'
                src='https://images.unsplash.com/photo-1468657988500-aca2be09f4c6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80'
                alt='First slide'
            />
            <Carousel.Caption>
                <h3>{props.data.title}</h3>
                <p>{props.data.question}</p>
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
        
    )
}

export default CarouselItem;