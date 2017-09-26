import React, { Component } from 'react';
import logo from '../images/plant-log.svg';
import './App.css';
import PlantList from './List-component.js';
import { exampleData } from './exampleData'
import { AddPlant } from './add-plant.js';
import { fetchPlantList } from '../util';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      plantData: []
    }
  }

  componentDidMount() {
    fetchPlantList((data) => this.setState({
      plantData: data
    }));
  }

  renderList(e) {
    console.log('RERENDER');
    fetchPlantList((data) => this.setState({
      plantData: data
    }));
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Plants Butler</h2>
        </div>
        <div className="list">
          <PlantList list={this.state.plantData} />
        </div>

        <AddPlant reRender={this.renderList.bind(this)}/>

      </div>
    );
  }
}

export default App;
