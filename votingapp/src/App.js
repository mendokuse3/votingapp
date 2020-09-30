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
    stateInfo: {}

  }

  toggleState = (data) => {
    this.setState({
      showState: true,
      stateInfo: data
    })
  }

  render() {
    return (
      <div>
        <Home/>
        <Questions/>
        <Register toggleState={this.toggleState} />
        {this.state.showState && <StateInfo stateInfo={this.state.stateInfo} />}
        <Candidates />
      </div>
    );
  }
}

export default App;