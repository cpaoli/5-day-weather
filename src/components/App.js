import React, { Component } from 'react';
import List from '../containers/list';
import SearchCity from '../containers/addCity';

class App extends Component {
  render() {
    return (
      <div className="container">
          <h3 style={{marginTop: "1em"}}>Get a five-day forecast in your favourite city</h3>          
          <SearchCity />
          <List />
      </div>
    );
  }
}

export default App;
