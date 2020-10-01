import React, { Component } from 'react';
import Questions from './questions/Questions';
import Candidates from './candidates/Candidates';
// import About from './About';
import Register from './Register';
import StateInfo from './StateInfo';
import Home from './Home';
import Dashboard from './Dashboard';
import Match from './Match'

class App extends Component {
  state = {
    showState: false,
    stateInfo: {},
    showHome: true,
    showQuestions: false,
    showRegister: false,
    showCandidates: false,
    showDashboards: false,
    showMatch: false,
    selectedCandidate: ''
  }

  toggleState = (data) => {
    this.setState({
      showState: true,
      stateInfo: data
    })
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

  goToCandidate = (index) => {
    this.setFalse();
    this.setState({
      showCandidates: true,
      selectedCandidate: index
    })
  }

  goToMatch = () => {
    this.setFalse();
    this.setState({
      showMatch: true
    })
  }

  goToRegister = () => {
    this.setFalse();
    this.setState({
      showRegister: true
    })
  }

  render() {
    return (
      <div>
        {this.state.showHome &&
        <Home goToDash={this.goToDash}/>
        }
        {this.state.showMatch && 
        <Match/>
        }
        {this.state.showDashboards &&
        <Dashboard  setFalse={this.setFalse} goToCandidate={this.goToCandidate} goToMatch={this.goToMatch} goToRegister={this.goToRegister}/>
        }
        {this.state.showQuestions &&
        <Questions/>
        }
        {this.state.showRegister &&
        <>
        <Register toggleState={this.toggleState} />
        {this.state.showState && <StateInfo toggleState={this.toggleState} stateInfo={this.state.stateInfo} />}
        </>
        }
        {this.state.showCandidates &&
        <Candidates selectedCandidate={this.state.selectedCandidate} />
        }
      </div>
    );
  }
}

export default App;