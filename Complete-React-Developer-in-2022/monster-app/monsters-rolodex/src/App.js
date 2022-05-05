import { useState, useEffect } from 'react';
import { Component } from 'react';

import logo from './logo.svg';
import './App.css';
import CardListComponent from './components/cards-list/cards-list.component';
import SearchBoxComponent from './components/search-box/search-box.component';

const App = () => {
  //  field extracted based on the inicial value, function to set the value, '' -> inicital value
  const [ searchField, setSearchField ] = useState('');
  const [ monsters, setMonsters ] = useState([]);
  const [ filteredMonsters, setFilteredMonsters ] = useState(monsters);

  useEffect(() => {
    console.log("use Effect APP called");
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(res => setMonsters(res)) // get data and set in monsters
      .catch(error => console.error(error));
  }, []);

  // run filter when monster and searchField changes
  useEffect(() => {
    console.log("procurando monsters com searchField: ", searchField);
    setFilteredMonsters(monsters.filter(m => String(m.name).toLowerCase().includes(searchField)));
  }, [monsters, searchField]); // when monsters are update above (fisrt time) and the user types something
  
  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLowerCase();
    console.log("atualizando search field com valor: ", searchFieldString);
    setSearchField(searchFieldString); // updates the searchfield and triggers useEffect above causing the monster to be refiltered
  }

  return (
  <div className="App">
    <h1 className='app-title'>Monster Search!</h1>
    <SearchBoxComponent onChangeHanlder={onSearchChange} placeholder='Search Monster' className='monsters-search-box'/>
    <CardListComponent monsters={filteredMonsters}/>
  </div>
  )
}

// class App extends Component {

//   // same thing as __init__
//   // first called
//   constructor() {
//     super();
//     this.state = {
//       monsters: [],
//       searchField: ''
//     }
//   }

//   // after the render
//   componentDidMount() {
//     //runs the code inside the function whenever the component mounts
//     // only once in the lifecicle
//     this.fetchUsersDate();
//   }

//   async fetchUsersDate() {
//     let res = await fetch('https://jsonplaceholder.typicode.com/users');
//     res = await res.json();
//     this.setState(() => {return {monsters: res}}, ()=>console.log("DidMount", this.state));
//   }

//   onSearchChange = (event) => {
//     const searchField = event.target.value.toLowerCase();
//     this.setState({searchField}); // trigger re-render
//   }

//   render() {
//     // when state gets update, re-render
//     console.log("renderizando");

//     const { monsters, searchField } = this.state; // more readble
//     const { onSearchChange } = this;

//     const filteredMonsters = monsters.filter(m => String(m.name).toLowerCase().includes(searchField));
//     // filteredMonsters change and is passed as props, and the components is re-render
//     return (
//       <div className="App">
//         <h1 className='app-title'>Monster Search!</h1>
//         <SearchBoxComponent onChangeHanlder={onSearchChange} placeholder='Search Monster' className='monsters-search-box'/>
//         <CardListComponent monsters={filteredMonsters}/>
//       </div>
//     );
//   }
// }


export default App;