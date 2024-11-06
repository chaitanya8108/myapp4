import React, { Component } from "react";
import "./Moreinfo.css";

class Moreinfo extends Component {
  render() {
    const { cid, cname, price } = this.props.myCourseData || {}; // Destructure course data

    return (
      <div className="moreinfo">
       
        <div className="more">
        <button className="mybtn2" onClick={this.props.onHideMore}>Hide Info</button>
          <p>Course ID: {cid}</p>
          <p>Course Name: {cname}</p>
          <p>Price: {price}</p>
        </div>
      </div>
    );
  }
}

export default Moreinfo;
