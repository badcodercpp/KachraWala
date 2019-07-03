import React, { Component } from "react";
import BodyLower from "./bodyLower";
import BodyUpper from "./bodyUpper";

export default class Body extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div id="_body">
        <BodyUpper />
        <BodyLower />
      </div>
    );
  }
}
