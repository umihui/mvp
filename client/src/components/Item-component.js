import React, { Component } from 'react';
import emptylogo from '../images/water-drop-empty.svg';
import { calculateCountDown, waterPlant} from '../util.js';

class PlantItem extends Component {
  constructor(props) {
    super(props);

    // this.state = {
    //   countDown : calculateCountDown(this.props.plant.lastWatering, this.dateNow, this.props.plant.interval)
    // }
  }


  render() {
    console.log('items:', this.props.plant.name, this.props.plant.lastWatering);
    var dateNow = new Date().getTime();
    var countDown = calculateCountDown(this.props.plant.lastWatering, dateNow, this.props.plant.interval)
    return (
      <div>
        <div className="plant-item">
          <h3>{this.props.plant.name}</h3>
          <br></br>
          <span className="count-down">{countDown} days left</span>
          <br></br>
            <button className="waterlogo" onClick={() => waterPlant({name:this.props.plant.name}, this.props.reRender)}>
            </button>

       </div>

     </div>
   );
  }
}

export default PlantItem;
