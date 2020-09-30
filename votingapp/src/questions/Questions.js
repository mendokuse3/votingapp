import React from 'react';
import {Carousel} from 'react-bootstrap'
import CarouselItem from './CarouselItem';
import questions from '../data/questionsArray';
import $ from 'jquery';

class Questions extends React.Component {
	state = {
		userScore: 0,
		userCandi: '',
		yesBTN: false,
		noBTN: false,
		maybeBTN: false,
		isActive: 0
	}
	
	setUserScore = (action) => {
		if(action === 'add'){
			this.setState({
				userScore: this.state.userScore + 1
			})
		} else if (action === 'subtract'){
			this.setState({
				userScore: this.state.userScore - 1
			})
		} else {
			return
		}
	}

    handleClick = () =>{
         if(this.state.userScore>= this.penceScore && this.state.userScore< this.trumpScore){
            this.setState({userCandi: 'Pence'})
        } else if (this.state.userScore >= this.trumpScore && this.state.userScore < 1.25) {
            this.setState({userCandi: 'Trump'})
        } else if (this.state.userScore>=1.25 && this.state.userScore<= this.bidenScore) {
            this.setState({userCandi: 'Biden'})
        } else {
            this.setState({userCandi: 'Harris'})
        }
	}

	componentDidMount(){
		$('.carousel-control-next').on('click', () => {
			if(this.state.isActive >= 0 && this.state.isActive < 9){
				this.setState({isActive: this.state.isActive + 1})
			} else {
				this.setState({isActive: 0})
			}
		})
		$('.carousel-control-prev').on('click', () => {
			if(this.state.isActive > 0 && this.state.isActive <= 9){
				this.setState({isActive: this.state.isActive - 1})
			} else {
				this.setState({isActive: 9})
			}
		})
	}

	// can create an array with all the questions and map through it, returning carousel.item's for cleaner code
	render(){
		const trumpScore = -9.5;
		const harrisScore = 9.5;
		const penceScore = -10;
		const bidenScore = 7;
    return (
			<div>
				<div>
					<Carousel interval={null} activeIndex={this.state.isActive}>
						{questions.map((q, i) => {
							return (
								<CarouselItem data={q} key={i} isActive={this.state.isActive} index={i} setUserScore={this.setUserScore} userScore={this.state.userScore}/>
							)
						})}
					</Carousel>
				</div>
			</div>
		);
	}
}



export default Questions;