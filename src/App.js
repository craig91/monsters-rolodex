import React, { Component } from 'react';
import './App.css';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';

class App extends Component {
  constructor() {
    super(); // calls the constructor method on the component class, thus giving access to this.state.
    this.state = {
      monsters: [],
      searchField: ''
    };

    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({ monsters: users }));
  }

  handleChange(e) {
    this.setState({ searchField: e.target.value })
  }

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster => 
      monster.name.toLowerCase().includes(searchField.toLowerCase())
      )
    return (
      <div className="App">
        
      <SearchBox
        placeholder='search monsters'
        handleChange={this.handleChange}
      />

        <CardList monsters={filteredMonsters}/> 
   
      </div>
    )
  }
}

export default App;
// for unique keys
// The reason why we need those is because react needs to know what element it needs to update if one of the elements in the array has a value that changes.