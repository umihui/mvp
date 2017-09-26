import React, { Component } from 'react';
import { addNewPlant, uploadFile} from '../util.js';
import * as $ from 'jquery'
import axios from 'axios';

class AddPlant extends Component {
  render() {
    return (
      <div className="add-plant">

        <h3>Add new plant</h3>
        <form className="add" onSubmit={
          (e) => {
            e.preventDefault();
            addNewPlant({name: $('.plantname').val(),interval: $('.interval').val()}, this.props.reRender);
            $('.plantname').val('');
            $('.interval').val('');
          }
        }>
          Plant Name: <input type="text" className="plantname" /><br></br>
          Interval(days):  <input type="text" className="interval" />
          <br></br>
          <input type="file" name="file" size="50" onChange={
            (e) => {
              e.preventDefault();
              uploadFile(e);
            }
          }/>
          <input type="submit" value="Submit" />
        </form>


      </div>
    );
  }

}

export {AddPlant};
