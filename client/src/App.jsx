import logo from './logo.svg';
import React, {Component} from 'react';
import './App.css';
import List from './List';

class App extends Component {
  constructor() {
    super();
    this.state = {
      isLoaded: false, 
      names : [], 
      ascendingOrder : false,
      isFindByName: false,
      inputName: '',
      message: "Press a button to list the names..."
    };
    this.getSortedAlphabetical = this.getSortedAlphabetical.bind(this);
    this.getSortedAmounts = this.getSortedAmounts.bind(this);
    this.getCount = this.getCount.bind(this);
    this.findByName = this.findByName.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    console.log("appi mountattu");
    // this.getSortedAmounts();
  }

  // XMLHttprequest GET name list ordered by name
  getSortedAlphabetical(){
    this.toggleOrder();
    var xhr = new XMLHttpRequest();
    
    xhr.addEventListener('load', () => {
      let order = this.state.ascendingOrder ? 'ascending' : 'descending';
      this.setState({
        names: xhr.response.nameList,
        message: "The list is ordered by names in " + order + " order:",
        order: this.toggleOrder,
        isFindByName: false,
        isLoaded: true
      })
    })

    xhr.open('GET', 'http://localhost:3001/names-by-alphabetical');
    xhr.responseType = 'json';
    xhr.send();
  }

  // XMLHttprequest GET name list ordered by amount
  getSortedAmounts(){
    this.toggleOrder();
    var xhr = new XMLHttpRequest();
    
    xhr.addEventListener('load', () => {
      let order = !this.state.ascendingOrder ? 'ascending' : 'descending';
      this.setState({
        names: xhr.response.nameList,
        message: "The list is ordered by amounts in "+ order + " order:",
        order: this.toggleOrder,
        isFindByName: false,
        isLoaded: true
      })
    })

    xhr.open('GET', 'http://localhost:3001/names-by-amount');
    xhr.responseType = 'json';
    xhr.send();
  }

  getCount(){
    var xhr = new XMLHttpRequest();
    
    xhr.addEventListener('load', () => {
      this.setState({
        names: [],
        message: "There are " + xhr.response.count + " names in the list.",
        isFindByName: false,
        isLoaded: true
      })
    })

    xhr.open('GET', 'http://localhost:3001/names-count');
    xhr.responseType = 'json';
    xhr.send();
  }

  toggleOrder(){
    this.setState({
      ascendingOrder: !this.state.ascendingOrder
    })
  }

  findByName(){
    this.setState({
      isFindByName: true,
      message: "Write the name you want to find:"
    })
    
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render(){
    if (this.state.isFindByName) {
      return(
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
          </header>
          <div className="buttons">
            <button onClick={this.getSortedAlphabetical}>Sort by names</button>
            <button onClick={this.getSortedAmounts}>Sort by amounts</button>
            <button onClick={this.getCount}>Count</button>
            <button onClick={this.findByName}>Find by name</button>
          </div>
          <h3>{this.state.message}</h3>
          <form onSubmit={this.handleSubmit}>
            <label>
              Name:
              <input type="text" value={this.state.value} onChange={this.handleChange} />
            </label>
          <input type="submit" value="Submit" />
          </form>
        </div>
      );
    }
    else if (this.state.names.length === 0) {
      return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
          </header>
          <div className="buttons">
            <button onClick={this.getSortedAlphabetical}>Sort by names</button>
            <button onClick={this.getSortedAmounts}>Sort by amounts</button>
            <button onClick={this.getCount}>Count</button>
            <button onClick={this.findByName}>Find by name</button>
          </div>
          <h3>{this.state.message}</h3>
        </div>
      );
    }
    else {
      return(
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
          </header>
          <div className="buttons">
            <button onClick={this.getSortedAlphabetical}>Sort by names</button>
            <button onClick={this.getSortedAmounts}>Sort by amounts</button>
            <button onClick={this.getCount}>Count</button>
            <button onClick={this.findByName}>Find by name</button>
          </div>
          <h3>{this.state.message}</h3>
          <List list={this.state.names} order={this.state.ascendingOrder} />
        </div>
      );
    }
  }
}

export default App;