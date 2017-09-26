import React, { Component } from 'react';
import logo from '../images/plant-log.svg';
import './App.css';
import PlantList from './List-component.js';
import { exampleData } from './exampleData'
import {AddPlant} from './add-plant.js';


class App extends Component {
  constructor() {
    super();
    this.state = {
      plantData: exampleData
    }
  }



  render() {
    console.log('APP',this.state.plantData);
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Plants List</h2>
        </div>
        <div className="list">
          <PlantList list={this.state.plantData} />
        </div>
        <AddPlant />
      </div>
    );
  }
}

export default App;
