import { Component } from 'react';

import logo from './logo.svg';
import './App.css';


class App extends Component {

  // same thing as __init__
  // first called
  constructor() {
    super();
    this.state = {
      monsters: [],
      monstersStorage: []
    }
  }

  // after the render
  componentDidMount() {
    //runs the code inside the function whenever the component mounts
    // only once in the lifecicle
    this.fetchUsersDate();
  }

  fetchUsersDate() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(res => {
        this.setState(() => {return {monstersStorage: res, monsters: res}}, ()=>console.log("DidMount", this.state))
      })
  }

  render() {
    return (
      <div className="App">
        <input className='search-box' type='search' placeholder='searh monsters' onChange={
          (event) => {
            const eventLocal = event.target.value.toLowerCase();
            if (eventLocal === '' || eventLocal === undefined || eventLocal.length === 0) {
              this.setState({monsters: this.state.monstersStorage})
            } else {
              let filteredMonster = this.state.monstersStorage.filter(m => String(m.name).toLowerCase().includes(eventLocal));
              console.log("filtrado", filteredMonster);
              this.setState({monsters: filteredMonster});
            }
          }
        }
        />
        {
        this.state.monsters.map(m => <h1 key={m.id}>{m.name}</h1>)
        }
      </div>
    );
  }

  // render() {
  //   return (
  //     <div className="App">
  //       <header className="App-header">
  //         <img src={logo} className="App-logo" alt="logo" />
  //         <p>
  //           Hi {this.state.name}
  //         </p>
  //         <button onClick={
  //           () => {this.setState(() => {
  //             return {name: "Joao"}
  //           }, () => {
  //             //will be executed when the funcion is finished
  //             // async
  //             console.log(this.state);
  //           })}
            
  //           }>Change name</button>
  //       </header>
  //     </div>
  //   );
  // }
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
