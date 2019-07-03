import React, { Component } from "react";
import HeadLower from "./headLower";
import HeadUpper from "./headUpper";

export default class Head extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div id="_head">
        <HeadUpper />
        <HeadLower />
      </div>
    );
  }
}
