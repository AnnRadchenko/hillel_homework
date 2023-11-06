import React, { Component } from "react";
import "./ToDo.css";

class ToDo extends Component {
  state = {
    firstList: this.props.list,
    secondList: [],
    thirdList: [],
  };

  transferToSecond = () => {
    this.setState({
      firstList: this.state.firstList.filter((item, index) => index !== 0),
      secondList: [this.state.firstList[0], ...this.state.secondList],
    });
  };

  transferToFirst = () => {
    this.setState({
      secondList: this.state.secondList.filter((item, index) => index !== 0),
      firstList: [this.state.secondList[0], ...this.state.firstList],
    });
  };

  transferToThird = () => {
    this.setState({
      secondList: this.state.secondList.filter((item, index) => index !== 0),
      thirdList: [this.state.secondList[0], ...this.state.thirdList],
    });
  };

  removeLastItem = () => {
    this.setState({
      thirdList: this.state.thirdList.filter(
        (item, index) => index !== this.state.thirdList.length - 1
      ),
    });
  };

  render() {
    const { firstList, secondList, thirdList } = this.state;

    return (
      <div className="wrapper">
        <div className="container">
          {firstList.length > 0 && (
            <>
              <ul>
                {firstList.map((item, index) => (
                  <li key={index}>{item.title}</li>
                ))}
              </ul>
              <button onClick={this.transferToSecond}>Transfer first to right</button>
            </>
          )}
        </div>
        <div className="container">
          {secondList.length > 0 && (
            <>
              <ul>
                {secondList.map((item, index) => (
                  <li key={index}>{item.title}</li>
                ))}
              </ul>
              <div>
                <button onClick={this.transferToFirst}>Transfer first to left</button>
                <button onClick={this.transferToThird}>Transfer first to right</button>
              </div>
            </>
          )}
        </div>
        <div className="container">
          {thirdList.length > 0 && (
            <>
              <ul>
                {thirdList.map((item, index) => (
                  <li key={index}>{item.title}</li>
                ))}
              </ul>
              <button onClick={this.removeLastItem}>Remove last item</button>
            </>
          )}
        </div>
      </div>
    );
  }
}

export default ToDo;
