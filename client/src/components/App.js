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
    };
    this.renderList = this.renderList.bind(this);
  }

  componentDidMount() {
    fetchPlantList((data) => this.setState({
      plantData: data
    }));
  }

  renderList() {
    console.log('RERENDER',this.state);

    fetchPlantList((data) => {
      //console.log(this.state);
      this.setState({
        plantData: data
      })
    });
  }

  render() {
    console.log('rendering');
    console.log(this.state.plantData);
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Plants Butler</h2>
        </div>
        <div className="list">
          <PlantList list={this.state.plantData} reRender={this.renderList} />
        </div>

        <AddPlant reRender={this.renderList}/>

      </div>
    );
  }
}

export default App;
