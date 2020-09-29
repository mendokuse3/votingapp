import React, { Component } from 'react';
import Questions from './Questions';
// import Candidates from './Candidates';
// import About from './About';
import Register from './Register';
import StateInfo from './StateInfo';


class App extends Component {
  state = {
    showStateInfo: false,
    stateURL: ''

  }

  toggleStateInfo = (stateLink) => {
    this.setState({
      showStateInfo: true,
      stateURL: stateLink
    })
  }

  render() {
    return (
      <div>
        <Questions/>
        <Register toggleStateInfo={this.toggleStateInfo} />
        {this.state.showStateInfo && <StateInfo stateURL={this.state.stateURL} />}
      </div>
    );
  }
}

export default App;