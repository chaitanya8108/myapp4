import React, { Component } from "react";
import "./App.css";
import Moreinfo from "./screens/Moreinfo";

class App extends Component {
  state = {
    courses: [
      { cid: "C-101", cname: "React JS", price: 15000 },
      { cid: "C-102", cname: "Node JS", price: 15000 },
      { cid: "C-103", cname: "Next JS", price: 15000 },
    ],
    selectedCourse: null, // State to hold the selected course
  };

  showMore = (mycid) => {
    const selectedCourse = this.state.courses.find(
      (course) => course.cid === mycid
    );
    this.setState({ selectedCourse: selectedCourse });
    // console.log("Selected Course:", selectedCourse);
  };

  hideMore = () => {
    this.setState({ selectedCourse: null }); // Clear selected course
  };

  render() {
    let mycourse = this.state.courses.map((x) => (
      <tr key={x.cid}>
        <td className="mydata0">{x.cid}</td>
        <td className="mydata0">{x.cname}</td>
        <td className="mydata0">{x.price}</td>
        <td className="btns">
          <button className="mybtn1" onClick={this.showMore.bind(this, x.cid)}>
            More Info
          </button>
          {/* <button className="mybtn2" onClick={this.hideMore}>Hide Info</button> */}
        </td>
      </tr>
    ));

    return (
      <div className="App">
        <h1>Course Data</h1>
        <table>
          <thead>
            <tr>
              <th>Course ID</th>
              <th>Course Name</th>
              <th>Price</th>
              <th></th>
            </tr>
          </thead>
          <tbody>{mycourse}</tbody>
        </table>

        {this.state.selectedCourse && (
          <Moreinfo
            myCourseData={this.state.selectedCourse}
            onHideMore={this.hideMore} // Pass hide function as prop
          />
        )}
      </div>
    );
  }
}

export default App;
