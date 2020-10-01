import React, { Component } from 'react';
import Questions from './questions/Questions';
import Candidates from './candidates/Candidates';
import Register from './Register';
import Home from './Home';
import Dashboard from './Dashboard';


class App extends Component {
  state = {
    showHome: true,
    showQuestions: false,
    showRegister: false,
    showCandidates: false,
    showDashboards: false,
    selectedCandidate: '',
  }

  setFalse = () => {
    this.setState({
      showHome: false,
      showQuestions: false,
      showRegister: false,
      showCandidates: false,
      showDashboards: false
    })
  }

  componentDidMount(){
    this.myVar = setTimeout(() => {
      this.setFalse();
      this.setState({
        showDashboards: true
      })
    }, 5000)
  }

  goToDash = () => {
    this.setFalse();
    this.setState({
      showDashboards: true
    })
    clearTimeout(this.myVar)
  }

  goToCandidate = (index, TF) => {
    this.setFalse();
    this.setState({
      showCandidates: true,
      selectedCandidate: index,
      alreadyMatched: TF
    })
  }

  goToRegister = () => {
    this.setFalse();
    this.setState({
      showRegister: true
    })
  }
  
  goToQuestions = () => {
    this.setFalse();
    this.setState({
      showQuestions: true
    })
  }

  goBackToMatch = () => {
    this.setFalse();
    this.setState({
      showQuestions: true
    })
  }

  render() {
    return (
      <div>
        {this.state.showHome &&
        <Home goToDash={this.goToDash}/>
        }
        {this.state.showDashboards &&
        <Dashboard  setFalse={this.setFalse} goToDash={this.goToDash} goToCandidate={this.goToCandidate} goToMatch={this.goToMatch} goToRegister={this.goToRegister} goToQuestions={this.goToQuestions} />
        }
        {this.state.showQuestions &&
        <Questions goToDash={this.goToDash} goToMatch={this.goToMatch} goToCandidate={this.goToCandidate}/>
        }
        {this.state.showRegister &&
        <Register toggleState={this.toggleState} goToDash={this.goToDash} />
        }
        {this.state.showCandidates &&

        <Candidates selectedCandidate={this.state.selectedCandidate} goToDash={this.goToDash} 
        goToQuestions={this.goToQuestions}/>

        }
      </div>
    );
  }
}

export default App;