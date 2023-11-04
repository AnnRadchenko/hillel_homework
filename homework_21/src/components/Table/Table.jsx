import React, { Component } from "react";
import './Table.css'; 

export default class Table extends Component {
  constructor(props) {
    super(props);

    const intervalId = setInterval(() => {
      const { list, copiedList } = this.state;
      const randomItem = copiedList[Math.floor(Math.random() * copiedList.length)] || {};
      const updatedList = list.map((element) => ({
        ...element,
        isActive: element.type === randomItem.type,
      }));
      const updatedCopiedList = copiedList.filter((element) => element.type !== randomItem.type);

      this.setState({
        list: updatedList,
        copiedList: updatedCopiedList,
      }, () => {
        if (copiedList.length === 0) {
            clearInterval(intervalId);
        }
      });
    }, 2000);
  }

  state = {
    list: this.props.list ? this.props.list : [],
    copiedList: this.props.list ? this.props.list : [],
  };

  render() {
    const { list } = this.state;

    return list.length > 0 && (
      <table>
        <tbody>
          {list.map((item, index) => (
            <tr style={item.isActive ? { color: "green", fontWeight: "bold" } : null} key={index}>
              {Object.keys(item).map((key, i) => (
                key !== 'isActive' && <td key={i}>{item[key]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}
