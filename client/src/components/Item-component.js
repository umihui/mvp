import React, { Component } from 'react';
import emptylogo from '../images/water-drop-empty.svg';
import { calculateCountDown, waterPlant} from '../util.js';

class PlantItem extends Component {
  constructor(props) {
    super(props);
    this.dateNow = new Date().getTime();
    this.countDown = calculateCountDown(this.props.plant.lastWatering, this.dateNow, this.props.plant.interval);
  }

  render() {
    return (
      <div>
        <div className="plant-item">
          <h3>{this.props.plant.name}</h3>
          <br></br>
          <span className="count-down">{this.countDown} days left</span>
          <br></br>
            <button className="waterlogo" onClick={() => waterPlant({name:this.props.plant.name})}>
            </button>

       </div>

     </div>
   );
  }
}

export default PlantItem;
