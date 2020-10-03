import React from 'react';
import {Carousel } from 'react-bootstrap'
import CarouselItem from './CarouselItem';
import questions from '../data/questionsArray';
import $ from 'jquery';
import Nav from '../navbar/Nav';
import Match from '../Match';
import '../CSS/Questions.css';

class Questions extends React.Component {
	state = {
		userScore: 0,
		userCandi: '',
		yesBTN: false,
		noBTN: false,
		maybeBTN: false,
		isActive: 0,
		submit: false,
		matchScore:0,
		showMatch: false
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
		let matchScore =0
		const trumpScore = -9.5;
		const harrisScore = 9.5;
		const penceScore = -10;
		const bidenScore = 6.5;
         if(this.state.userScore>= this.penceScore && this.state.userScore< -9.75){
			this.setState({userCandi: 'Pence'})
			matchScore= Math.floor((this.state.userScore/penceScore)*100)
			this.setState({matchScore, candidateIndex: 2})
        } else if (this.state.userScore >= -9.75 && this.state.userScore < -1.5) {
			this.setState({userCandi: 'Trump'})
			matchScore= Math.floor((this.state.userScore/trumpScore)*100)
			this.setState({matchScore, candidateIndex: 1})
        } else if (this.state.userScore>=-1.5 && this.state.userScore<8) {
			this.setState({userCandi: 'Biden'})
			matchScore= Math.floor((this.state.userScore/bidenScore)*100)
			this.setState({matchScore, candidateIndex: 0})
        } else {
			this.setState({userCandi: 'Harris'})
			matchScore= Math.floor((this.state.userScore/harrisScore)*100)
			this.setState({matchScore, candidateIndex: 3})
        }
	}


	componentDidMount(){
		$('.carousel-control-next').on('click', () => {
			if(this.state.isActive >= 0 && this.state.isActive < 10){
				this.setState({isActive: this.state.isActive + 1})
			} else {
				this.setState({isActive: 0})
			}
		})
		$('.carousel-control-prev').on('click', () => {
			if(this.state.isActive > 0 && this.state.isActive <= 10){
				this.setState({isActive: this.state.isActive - 1})
			} else {
				this.setState({isActive: 10})
			}
		})
		if(this.state.isActive === 0){
			$('.carousel-control-prev').off();
			$('.carousel-control-prev-icon').css('display', 'none');
		}
	}
	
	componentDidUpdate(){
		if(this.state.isActive === 0){
			$('.carousel-control-prev').off();
			$('.carousel-control-prev-icon').css('display', 'none');
		} else if(this.state.isActive === 10){
			$('.carousel-control-next').off();
			$('.carousel-control-next-icon').css('display', 'none');
		} else {
			$('.carousel-control-prev').off();
			$('.carousel-control-next').off();
			$('.carousel-control-prev-icon').css('display', 'inline-block');
			$('.carousel-control-next-icon').css('display', 'inline-block');
			$('.carousel-control-next').on('click', () => {
				if(this.state.isActive >= 0 && this.state.isActive < 10){
					this.setState({isActive: this.state.isActive + 1})
				} else {
					this.setState({isActive: 0})
				}
			})
			$('.carousel-control-prev').on('click', () => {
				if(this.state.isActive > 0 && this.state.isActive <= 10){
					this.setState({isActive: this.state.isActive - 1})
				} else {
					this.setState({isActive: 10})
				}
			})
		}

	}

	goToMatch = () => {
		this.setState({
			showMatch: true
		})
	}

	goBack = () => {
		this.setState({
			showMatch: !this.state.showMatch
		})
	}

	render(){
    return (
			<div className='question-container'>
				<Nav question goToDash={this.props.goToDash} goBack={this.state.showMatch ? this.goBack : this.props.goToDash}/>
				{!this.state.showMatch &&
				<div>
					<Carousel interval={null} activeIndex={this.state.isActive}>
						{questions.map((q, i) => {
							return (
								<CarouselItem data={q} key={i} isActive={this.state.isActive} index={i} setUserScore={this.setUserScore} userScore={this.state.userScore} handleClick={this.handleClick} goToMatch={this.goToMatch}/>
							)
						})}
					</Carousel>
				</div>
				}
				{this.state.showMatch && 
				<Match matchScore={this.state.matchScore} candidate={this.state.userCandi} candidateIndex={this.state.candidateIndex} goToCandidate={this.props.goToCandidate}/>
				}
			</div>
		);
	}
}



export default Questions;