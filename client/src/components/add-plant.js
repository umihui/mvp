import React, { Component } from 'react';
import {addNewPlant} from '../util.js';
import * as $ from 'jquery'

class AddPlant extends Component {
  render() {
    return (
      <div>

        <p>add new plant</p>
        <form className="add" onSubmit={
          (e) => {
            e.preventDefault();
            addNewPlant({name: $('.plantname').val(),interval: $('.interval').val()},this.props.reRender);
            $('.plantname').val('');
            $('.interval').val('');
          }
        }>
          Name: <input type="text" className="plantname" /><br></br>
          Interval:  <input type="text" className="interval" /><span>days</span><br></br>
          <input
            type="submit"
            value="Submit"
          />
        </form>

      </div>
    );
  }

}

export {AddPlant};
