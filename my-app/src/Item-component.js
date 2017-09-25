import React, { Component } from 'react';
import emptylogo from './water-drop-empty.svg'

class PlantItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className="plant-item">
          {this.props.plant.name}
          <span className="count-down">{this.props.plant.interval}</span>
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
