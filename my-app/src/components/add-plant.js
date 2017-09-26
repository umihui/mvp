import React, { Component } from 'react';

class AddPlant extends Component {
  render() {
    return (
      <div>
        <div>
          <h2>New Plant</h2>
        </div>
        <form>
          Name: <input type="text" name="fname" /><br></br>
          Interval:  <input type="text" name="lname" /><span>days</span><br></br>
          <input type="submit" value="Submit" />
        </form>
    </div>
    );
  }

}

export default AddPlant;
