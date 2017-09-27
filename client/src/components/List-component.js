import React, { Component } from 'react';
import PlantItem from './Item-component.js';

var PlantList = (props) => (
  <div className="plant-list">
    {props.list.map((plant,i) =>
      <div key={(i).toString()}>
        <PlantItem plant={plant} reRender={props.reRender}/>
      </div>
    )}
  </div>
);

export default PlantList;
