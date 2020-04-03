import React, { Component } from 'react';
import './App.css';
import Main from './components/MainComponent';


class App extends Component {
  render() {
    console.log(this.state);
    console.log("This is the process.env", process.env.PUBLIC_URL)
    return (
      <div>
        <Main />
      </div>
    );
  }
}

export default App;
