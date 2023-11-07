import React, { Component } from "react";
import "./List.css";

class List extends Component {
  render() {
    const { list, actions } = this.props;
    return (
      <div className="container">
        {list && list.length > 0 && (
          <>
            <ul>
              {list.map((item, index) => (
                <li key={index}>{item.title}</li>
              ))}
            </ul>
            <div>
              {actions.map((item, index) => (
                <button key={index} onClick={item.action}>
                  {item.text}
                </button>
              ))}
            </div>
          </>
        )}
      </div>
    );
  }
}

export default List;
