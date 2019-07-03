import React, { Component } from "react";
import Head from "./head";
import Body from "./body";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div id="home_container">
        <Head />
        <Body />
      </div>
    );
  }
}
