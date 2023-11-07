import React, { Component } from "react";
import "./ToDo.css";
import List from "../List/List";


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
        <List
          key={this.index}
          list={firstList}
          actions={[{ text: "Transfer first to right", action: this.transferToSecond }]}
        />
        <List
          key={this.index}
          list={secondList}
          actions={[
            { text: "Transfer first to left", action: this.transferToFirst },
            { text: "Transfer first to right", action: this.transferToThird },
          ]}
        />
        <List
          key={this.index}
          list={thirdList}
          actions={[{ text: "Remove last item", action: this.removeLastItem }]}
        />
      </div>
    );
  }
}

export default ToDo;
