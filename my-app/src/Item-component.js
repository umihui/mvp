import React, { Component } from 'react';

class PlantItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="plant-item">
        {this.props.plant.name}
        <span className="count-down">{this.props.plant.interval}</span>
     </div>
     <div className="action-button">
       <button className="water">
         
       </button>
     </div>
   );
  }
}

export default PlantItem;
