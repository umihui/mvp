import React, { Component } from 'react';
import emptylogo from './water-drop-empty.svg';
import { calculateCountDown } from './util.js';

class PlantItem extends Component {
  constructor(props) {
    super(props);
    this.dateNow = new Date().getTime();
    this.countDown = calculateCountDown(this.props.plant.lastTime, this.dateNow, this.props.plant.interval);
  }

  render() {
    console.log(this.countDown);
    return (
      <div>
        <div className="plant-item">
          {this.props.plant.name}
          <span className="count-down">{this.countDown}</span>
       </div>
       <div className="action-button">
         <button className="waterlogo">
         </button>
       </div>
     </div>
   );
  }
}

export default PlantItem;
