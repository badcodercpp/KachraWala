/* eslint-disable */
import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Build from "@material-ui/icons/Build";
import Subject from "@material-ui/icons/Subject";
import FormatPaint from "@material-ui/icons/FormatPaint";
import Code from "@material-ui/icons/Code";
import Dashboard from "@material-ui/icons/Dashboard";
import Timeline from "@material-ui/icons/Timeline";
import Group from "@material-ui/icons/Group";
// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import NavPills from "components/NavPills/NavPills.jsx";
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Muted from "components/Typography/Muted.jsx";
import InfoArea from "components/InfoArea/InfoArea.jsx";
import Badge from "components/Badge/Badge.jsx";

import projectsStyle from "assets/jss/material-kit-pro-react/views/sectionsSections/projectsStyle.jsx";

import office2 from "assets/img/examples/office2.jpg";
import cardBlog3 from "assets/img/examples/card-blog3.jpg";
import cardProject1 from "assets/img/examples/Oil-Painting-Card.jpg";
import cardProject2 from "assets/img/examples/Charcoal-Card-3.jpg";
import cardProject3 from "assets/img/examples/Watercolor-Card-1.jpg";
import cardProject4 from "assets/img/examples/Acrylic-Card-2.jpg";
import cardProject5 from "assets/img/examples/card-project5.jpg";
import cardProject6 from "assets/img/examples/card-project6.jpg";

function SectionProjects({ ...props }) {
  const { classes, ...rest } = props;
  return (
    <div className="cd-section" {...rest}>
      {/* Project 3 START */}
      <div
        className={`${classes.projects} ${classes.sectionDark} ${
          classes.projects3
        }`}
      >
        <div className={classes.container}>
          <GridContainer>
            <GridItem
              xs={12}
              sm={8}
              md={8}
              className={`${classes.mlAuto} ${classes.mrAuto} ${
                classes.textCenter
              }`}
            >
              {/* <Muted>
                <h6>OUR WORK</h6>
              </Muted> */}
              <h2 className={classes.title} style= {{
                marginBottom: 20
              }}>
                Our Work
              </h2>
            </GridItem>
          </GridContainer>
          <GridContainer>
            {
              props.Category.data.map( (a,b)=>{
                return (
                  <GridItem xs={12} sm={4} md={4} className={classes.mlAuto} key={b} >
                    <Card plain className={classes.card2}>
                      <a href="#pablo" onClick={e => e.preventDefault()}>
                        <CardHeader plain image>
                          <img src={cardProject1} style={{ maxHeight: 212}} alt="..." />
                        </CardHeader>
                      </a>
                      <CardBody>
                        {/* <h6 className={classes.cardCategory}>WEB DESIGN</h6> */}
                        <a href="#pablo" onClick={e => e.preventDefault()}>
                          <h4 className={classes.cardTitle}>
                            {
                              a.name
                            }
                          </h4>
                        </a>
                      </CardBody>
                    </Card>
                  </GridItem>
                )
              } )
            }
            {/**
             * <GridItem xs={12} sm={4} md={4} className={classes.mlAuto}>
              <Card plain className={classes.card2}>
                <a href="#pablo" onClick={e => e.preventDefault()}>
                  <CardHeader plain image>
                    <img src={cardProject1} style={{ maxHeight: 212}} alt="..." />
                  </CardHeader>
                </a>
                <CardBody>
                  <h6 className={classes.cardCategory}>WEB DESIGN</h6> }
                  <a href="#pablo" onClick={e => e.preventDefault()}>
                    <h4 className={classes.cardTitle}>
                      Oil Paintings
                    </h4>
                  </a>
                </CardBody>
              </Card>
            </GridItem>
             */}
            {/**
             * <GridItem xs={12} sm={4} md={4} className={classes.mrAuto}>
              <Card plain className={classes.card2}>
                <a href="#pablo" onClick={e => e.preventDefault()}>
                  <CardHeader plain image>
                    <img src={cardProject2} style={{ maxHeight: 212}} alt="..." />
                  </CardHeader>
                </a>
                <CardBody>
                  <a href="#pablo" onClick={e => e.preventDefault()}>
                    <h4 className={classes.cardTitle}>
                      Charcoal Potraits
                    </h4>
                  </a>
                </CardBody>
              </Card>
            </GridItem>
             */}
            {/**
             * <GridItem xs={12} sm={4} md={4} className={classes.mlAuto}>
              <Card plain className={classes.card2}>
                <a href="#pablo" onClick={e => e.preventDefault()}>
                  <CardHeader plain image>
                    <img src={cardProject3} style={{ maxHeight: 212}} alt="..." />
                  </CardHeader>
                </a>
                <CardBody>
                  <a href="#pablo" onClick={e => e.preventDefault()}>
                    <h4 className={classes.cardTitle}>Watercolor Potraits</h4>
                  </a>
                </CardBody>
              </Card>
            </GridItem>
             */}
            {/**
             * <GridItem xs={12} sm={4} md={4} className={classes.mrAuto}>
              <Card plain className={classes.card2}>
                <a href="#pablo" onClick={e => e.preventDefault()}>
                  <CardHeader plain image>
                    <img src={cardProject4} style={{ maxHeight: 212}} alt="..." />
                  </CardHeader>
                </a>
                <CardBody>
                  <a href="#pablo" onClick={e => e.preventDefault()}>
                    <h4 className={classes.cardTitle}>Arcylic Potraits</h4>
                  </a>
                </CardBody>
              </Card>
            </GridItem>
             */}
          </GridContainer>
        </div>
      </div>
      {/* Project 3 END */}
    </div>
  );
}

export default withStyles(projectsStyle)(SectionProjects);
