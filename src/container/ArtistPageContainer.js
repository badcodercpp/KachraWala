//import { connect } from 'react-redux';
import { DynamicConnect } from "./../extended-connect/dynamicConnect";
import SectionTeams from "../views/ArtistsPage/ArtistsPage.js";
import { PRATIBHA_KEY_DEMO_STORE } from "./../store/key/storeKey";
import * as Actions from "./../action/actionCreator";
import { bindActionCreators } from "redux";
//import React,{Component} from 'react'

//import {demoStore} from './../store/demoStore'

const mapStateToProps = state => {
  console.log(state)
  console.log("uuuuuuuuuuuuuuuuuuuuuuuuuu")
  console.log({
    profileSchema: state["artistReducer"].profileSchema
  })
  return {
    profileSchema: state["artistReducer"].profileSchema
  };
};

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(Actions, dispatch)
});

let dc = new DynamicConnect(PRATIBHA_KEY_DEMO_STORE);

let connect_1 = dc.connect(
  mapStateToProps,
  mapDispatchToProps,
  null,
  {}
);
connect_1 = connect_1(SectionTeams);
let connect = connect_1;

export default connect;
