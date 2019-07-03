import React, { Component } from "react";
import { HomeScreen } from "./../screen/screenContainer";
import { RouteCreator } from "./../routes/routeCreator";
import * as Actions from "./../action/actionCreator";

export default class DemoComponent extends Component {
  constructor(props) {
    super(props);
    const { dispatch } = props;
    //this.state={...props}
  }
  componentWillMOunt() {
    console.log(this.props);
  }
  clickMe = evt => {
    //console.log(this.state.name)
    //this.props.name="ajay";
    console.log(this.state);
    let { actions } = this.props;

    let action = actions.TOGGLE_NAME_METHOD("Use Redux");
    console.log(this.props);
    //dispatch(action)

    //Actions.TOGGLE_NAME_METHOD({name:"Ajay"})

    //let r=new RouteCreator();
    //r.createRoute(HomeScreen);
  };
  render() {
    return (
      <div>
        {this.props.name ? <p>{this.props.name}</p> : false}
        <p onClick={this.clickMe}>click to navigate</p>
      </div>
    );
  }
}
