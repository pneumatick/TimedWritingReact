import './App.css';
import React from 'react';
import AppHeader from './components/AppHeader';
import TimerContainer from './components/TimerContainer';
import Notepad from './components/Notepad';
import PastWorks from './components/PastWorks';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      disabled: true,
      text: '',
      numWorks: 0,
      works: []
    };

    this.toggleWriting = this.toggleWriting.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.presentOutcome = this.presentOutcome.bind(this);
  }

  // Start the timer, clear the text area, and let the user write
  toggleWriting() {
    let newState = this.state.disabled ? false : true;
    // Allow user input to persist in between sessions,
    // but clear it upon the start of a new session
    if (this.state.disabled) {
      this.setState({ text: '' });
    }
    this.setState({ disabled: newState });
  }

  // Store the user's text input
  handleChange(e) {
    this.setState({ text: e.target.value });
  }

  // Show the user the result of their writing
  presentOutcome() {
    this.setState({
      numWorks: this.state.numWorks + 1,
      works: [...this.state.works, this.state.text]
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <AppHeader />
          <TimerContainer
            disabled={this.state.disabled}
            toggleWriting={this.toggleWriting}
            presentOutcome={this.presentOutcome}
          />
          <Notepad 
            disabled={this.state.disabled} 
            onChange={this.handleChange}
            value={this.state.text} 
          />
          <PastWorks
            numWorks={this.state.numWorks}
            works={this.state.works}          
          />
        </header>
      </div>
    );
  }
}

export default App;
