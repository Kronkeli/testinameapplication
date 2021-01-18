import logo from './logo.svg';
import React, {Component} from 'react';
import './App.css';
import List from './List';

class App extends Component {
  constructor() {
    super();
    this.state = {isLoaded: false, names : []};
    this.getSortedAlphabetical = this.getSortedAlphabetical.bind(this);
  }

  componentDidMount() {
    console.log("appi mountattu");
  }

  getSortedAlphabetical(){
    // create a new XMLHttprequest
    var xhr = new XMLHttpRequest();
    
    // get a callback when the server responds
    xhr.addEventListener('load', () => {
      // update the state of the component with the result here
      console.log(xhr.response);
      this.setState({
        names:xhr.response.nameList,
        isLoaded: true
      })
    })

    // open the request with the verb and url
    xhr.open('GET', 'http://localhost:3001/names-by-alphabetical');
    xhr.responseType = 'json';
    xhr.send();
  }

  render(){
    if (this.state.names.length === 0) {
      return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
          </header>
          <div className="buttons">
            <button onClick={this.getSortedAlphabetical}>Sort by names</button>
            <button>Sort by amounts</button>
          </div>
          <div>Press a button to list the names...</div>
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
            <button>Sort by amounts</button>
          </div>
          <List list={this.state.names} />
        </div>
      );
    }
  }
}

export default App;
