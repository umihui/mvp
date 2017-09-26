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
          {this.props.plant.name}
          <span className="count-down">{this.countDown}</span>
       </div>
       <div className="action-button">
         <button className="waterlogo" onClick={() => waterPlant({name:this.props.plant.name})}>
         </button>
       </div>
     </div>
   );
  }
}

export default PlantItem;
