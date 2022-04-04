import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    // return (
    //   <div className="App">
    //     <h1>Hi i'm React APP</h1>
    //   </div>
    // );
    return React.createElement('div', null, 'h1', '')
  }
}

export default App;
