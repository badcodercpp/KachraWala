import React, { Component } from "react";
import { DemoScreen } from "./../../screen/screenContainer";
import { RouteCreator } from "./../../routes/routeCreator";
import { PRATIBHA_KEY_DEMO_STORE } from "./../../store/key/storeKey";
import SectionSlider from './Sections/SectionCarousel'
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import SectionCards from "./../HomePage/Sections/SectionCards";
import SectionTestimonials from "./Sections/SectionTestimonials";

import { FETCH } from "../../util/apiCall";
import { fetchStatusHandler } from "../../util/statusHandler";

export default class HomeComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "HOME component",
      ...this.props,
      categoryData:this.props.categoryData!==undefined?this.props.categoryData:{data:[]}
    };
    const { dispatch } = props;
  }
  UNSAFE_componentWillReceiveProps(newProps){
    console.log("fgfgsfhshfghf")
    console.log(newProps)
    this.setState({
      ...newProps
    })
  }
  componentDidMount(){
    const { dispatch, actions } = this.props;
    console.log("signup or login successfull and signup data is following") 
    console.log(this.state.authenticData)

    if(this.state.authenticData !== undefined && this.state.authenticData.authenticData.status){
      const header ={ "Content-Type": "application/json"};
      const url = "https://patarts-backend.herokuapp.com/api/ping";
      FETCH("GET",url,header,null)
      .then(fetchStatusHandler)
      .then(resp=>resp.json())
      .then(data=>{
        console.log("result of ping")
        console.log(data)
        actions.SAVE_PING_DATA_METHOD({pingData:data})
        
        // console.log(this.state)
        // /*let r = new RouteCreator();
        // r.createRoute(HomeScreen, PRATIBHA_KEY_DEMO_STORE);*/
  
        // console.log("success artist data")
        // console.log(data)
        // console.log(this.state)
        // setTimeout(()=>{
        //   console.log(this.state)
        // },5000)
      })
      .catch(err=>{
        console.log("err")
        console.log(err)
      })
    }
    
    
    //console.log(payload)

    //category api call



    const header1 ={ "Content-Type": "application/json"};
    const url1 = "https://patarts-backend.herokuapp.com/api/category/list";
    FETCH("GET",url1,header1,null)
    .then(fetchStatusHandler)
    .then(resp=>resp.json())
    .then(data=>{
      console.log("result of category")
      console.log(data)
      actions.SAVE_CATEGORY_DATA_METHOD({categoryData:data})
      
      console.log(this.state)
      // /*let r = new RouteCreator();
      // r.createRoute(HomeScreen, PRATIBHA_KEY_DEMO_STORE);*/

      // console.log("success artist data")
      // console.log(data)
      // console.log(this.state)
      // setTimeout(()=>{
      //   console.log(this.state)
      // },5000)
    })
    .catch(err=>{
      console.log("err")
      console.log(err)
    })
    
  }
  clickMe = evt => {
    let r = new RouteCreator();
    r.createRoute(DemoScreen, PRATIBHA_KEY_DEMO_STORE);
  };
  render() {
    return (
      <GridContainer>
        <GridItem xs={12} sm={12} md={12} >
          <SectionSlider />
          <SectionCards Category={this.state.categoryData} />
          <SectionTestimonials />
        </GridItem>
      </GridContainer>
    );
  }
}
