import React, { Component } from 'react';
import List from '../containers/list';
import SearchCity from '../containers/addCity';
import './weather.css';

class App extends Component {
  render() {
    return (
      <div className="container">
          <h3 style={{marginTop: "1em"}}>Get a five-day forecast in your favourite American city</h3>          
          <SearchCity /> 
          <List />       
      </div>
    );
  }
}

export default App;
