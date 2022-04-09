import { Component } from 'react';

import logo from './logo.svg';
import './App.css';


class App extends Component {

  // same thing as __init__
  constructor() {
    super();
    this.state = {
      name: 'Rafael'
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Hi {this.state.name}
          </p>
          <button onClick={
            () => {this.setState(() => {
              return {name: "Joao"}
            }, () => {
              //will be executed when the funcion is finished
              // async
              console.log(this.state);
            })}
            
            }>Change name</button>
        </header>
      </div>
    );
  }
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Hi Rafael
//         </p>
//         <button>
//           Change name
//         </button>
//       </header>
//     </div>
//   );
// }

export default App;
