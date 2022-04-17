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
      searchField: ''
    }
  }

  // after the render
  componentDidMount() {
    //runs the code inside the function whenever the component mounts
    // only once in the lifecicle
    this.fetchUsersDate();
  }

  async fetchUsersDate() {
    let res = await fetch('https://jsonplaceholder.typicode.com/users');
    res = await res.json();
    this.setState(() => {return {monsters: res}}, ()=>console.log("DidMount", this.state));
  }

  onSearchChange = (event) => {
    const searchField = event.target.value.toLowerCase();
    this.setState({searchField}); // trigger re-render
  }

  render() {
    // when state gets update, re-render
    console.log("renderizando");

    const { monsters, searchField } = this.state;
    const { onSearchChange } = this;

    const filteredMonsters = monsters.filter(m => String(m.name).toLowerCase().includes(searchField));
    return (
      <div className="App">
        <input className='search-box' type='search' placeholder='searh monsters' onChange={onSearchChange}/>
        {
        filteredMonsters.map(m => <h1 key={m.id}>{m.name}</h1>)
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
