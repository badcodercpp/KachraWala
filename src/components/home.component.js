import React, { Component } from "react";
import { DemoScreen } from "./../screen/screenContainer";
import { RouteCreator } from "./../routes/routeCreator";
import { PRATIBHA_KEY_DEMO_STORE } from "./../store/key/storeKey";
import SectionSlider from '../views/ComponentsPage/Sections/SectionCarousel'
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import SectionCards from "../views/HomePage/Sections/SectionCards";
import SectionTestimonials from "../views/HomePage/Sections/SectionTestimonials";

export default class HomeComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "HOME component"
    };
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
          <SectionCards />
          <SectionTestimonials />
        </GridItem>
      </GridContainer>
    );
  }
}
