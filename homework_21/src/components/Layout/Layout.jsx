import { Component } from "react";
import Table from "../Table/Table";

const animals = [
  { type: `turtle`, icon: `🐢` },
  { type: `octopus`, icon: `🐙` },
  { type: `fish`, icon: `🐠` },
  { type: `flamingo`, icon: `🦩` },
  { type: `penguin`, icon: `🐧` },
];

class Layout extends Component {
  render() {
    return (
      <div style={{padding: '20px'}}>
        <h3>Animals Table</h3>
        <Table list={animals} />
        <Table list={[{ type: `cat`, icon: `😺` }, { type: `dog`, icon: `🐶` }, { type: `lion`, icon: `🦁` }]}/>
        <Table />
      </div>
    );
  }
}

export default Layout;
