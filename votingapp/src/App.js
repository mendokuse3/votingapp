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
    showHome: false,
    showQuestions: false,
    showRegister: true,
    showCandidates: false,
    showDashboards: false
  }

  toggleState = (data) => {
    console.log('from app')
    console.log(data)
    this.setState({
      showState: true,
      stateInfo: data
    })
  }

  render() {
    return (
      <div>
        {this.state.showHome &&
        <Home/>
        }
        {this.state.showDashboards &&
        <h1>I'm the dashboard</h1>
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