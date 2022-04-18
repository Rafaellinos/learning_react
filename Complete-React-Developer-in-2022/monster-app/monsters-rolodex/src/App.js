import { Component } from 'react';

import logo from './logo.svg';
import './App.css';
import CardListComponent from './components/cards-list/cards-list.component';


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

    const { monsters, searchField } = this.state; // more readble
    const { onSearchChange } = this;

    const filteredMonsters = monsters.filter(m => String(m.name).toLowerCase().includes(searchField));
    return (
      <div className="App">
        <input className='search-box' type='search' placeholder='searh monsters' onChange={onSearchChange}/>
        <CardListComponent monsters={filteredMonsters}/>
      </div>
    );
  }
}


export default App;