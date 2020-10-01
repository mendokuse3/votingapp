import React, { Component } from 'react';
import Questions from './questions/Questions';
import Candidates from './candidates/Candidates';
// import About from './About';
import Register from './Register';
import StateInfo from './StateInfo';
import Home from './Home';



class App extends Component {
  state = {
    showState: false,
    stateInfo: {},
    showHome: true,
    showQuestions: false,
    showRegister: false,
    showCandidates: false,
    showDashboards: false
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

  render() {
    return (
      <div>
        {this.state.showHome &&
        <Home goToDash={this.goToDash}/>
        }
        {this.state.showDashboards &&
        <>
        <h1>I'm the dashboard</h1>
        <button>Go To Questionaire</button>
        <button>Go To Register to Vote</button>
        <button>Go to Candidate Profiles</button>
        </>
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
        <Candidates />
        }
      </div>
    );
  }
}

export default App;