import React,{Component} from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons
// import  from "@material-ui/icons/";
// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Card from "components/Card/Card.jsx";
import CardAvatar from "components/Card/CardAvatar.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardFooter from "components/Card/CardFooter.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Muted from "components/Typography/Muted.jsx";

import teamsStyle from "assets/jss/material-kit-pro-react/views/sectionsSections/teamsStyle.jsx";
import marc from "assets/img/faces/marc.jpg";
import christian from "assets/img/faces/christian.jpg";
import kendall from "assets/img/faces/kendall.jpg";
import avatar from "assets/img/faces/avatar.jpg";

// router module import

import { ProfileScreen } from "./../../screen/screenContainer";
import { RouteCreator } from "./../../routes/routeCreator";
import { PRATIBHA_KEY_DEMO_STORE } from "./../../store/key/storeKey";
//import thunk from 'redux-thunk';

import {DUMMY_API_CALL} from './../../action/api/index'

import { FETCH } from "../../util/apiCall";
import { fetchStatusHandler } from "../../util/statusHandler";

class SectionTeams extends Component {
  constructor(props){
    super(props);
    this.state = {...this.props,profileSchema_1:[]};
    
    //const 
  
    // for dev only to be replaced with redux
    //window.__dander_date_profile = ProfileSchema;
  }
  UNSAFE_componentWillReceiveProps(newProps){
    console.log("fgfgsfhshfghf")
    console.log(newProps)
    this.setState({
      ...newProps
    })
  }
  componentDidMount(){
    console.log(this.props)
    const { dispatch, actions } = this.props;
    
    //console.log(payload)
    const header ={ "Content-Type": "application/json"};
    const url = "https://patarts-backend.herokuapp.com/api/artist/list";
    FETCH("GET",url,header,null)
    .then(fetchStatusHandler)
    .then(resp=>resp.json())
    .then(data=>{
      console.log("this actions")
      console.log(actions)
      actions.GET_PROFILE_SCHEMA_METHOD({profileSchema:data})
      
      console.log(this.state)
      /*let r = new RouteCreator();
      r.createRoute(HomeScreen, PRATIBHA_KEY_DEMO_STORE);*/

      console.log("success artist data")
      console.log(data)
      console.log(this.state)
      setTimeout(()=>{
        console.log(this.state)
      },5000)
    })
    .catch(err=>{
      console.log("err")
      console.log(err)
    })
  }
  
  // end

  clickable = (e, data) => {
    e.preventDefault();
    e.stopPropagation();
    console.log(this.state)
    let r = new RouteCreator();
    r.createRouteWithId(ProfileScreen, PRATIBHA_KEY_DEMO_STORE, data.id);
    //console.log(JSON.stringify(data));
    /*const { dispatch, actions } = this.props;
    const x = {
      type: "HELLO_ACTION",
      data: data,
    }
    //DUMMY_API_CALL(x,{type:"GET",url:"https://www.thelinkedface.com/getMyAllNotification/9836648105"})
    let action = actions.DISPLAY_PROFILE_BY_ID_METHOD({name: data.name,dp: data.dp,id: data.id,details: data.details});
    //console.log(this.props);
    let r = new RouteCreator();
    r.createRouteWithId(ProfileScreen, PRATIBHA_KEY_DEMO_STORE, data.id);*/
  };
  
  

  render(){
    const { classes, ...rest } = this.props;
    const { dispatch, actions } = this.props;
    const cursorStyle = { cursor: "pointer" };
    console.log(this.state)
    console.log("haha")
    const ProfileSchema = this.state.profileSchema === undefined ? [] :this.state.profileSchema
    return (
      <div className="cd-section" {...rest}>
        {/* Team 1 START */}
        <div
          className={classes.team}
          style={{
            paddingTop: 0
          }}
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
                <h2 className={classes.title}>Our Artists (Hero's)</h2>
                <h5
                  className={classes.description}
                  style={{
                    marginBottom: 60
                  }}
                >
                  This is the paragraph where you can write more details about
                  your team. Keep you user engaged by providing meaningful
                  information.
                </h5>
              </GridItem>
            </GridContainer>
            <GridContainer>
              {ProfileSchema.map((a, b) => {
                  return (
                    <GridItem xs={12} sm={3} md={3} key={b} >
                      <Card profile plain>
                        <CardAvatar profile plain>
                          <a onClick={e=>this.clickable(e,a)} style={cursorStyle} >
                            <img src={a.profile_pic} alt="..." className={classes.img} />
                          </a>
                        </CardAvatar>
                        <CardBody>
                          <h4 className={classes.cardTitle}>{`${a.first_name} ${a.last_name}`}</h4>
                          <Muted>
                            <a className={classes.cardCategory} style={cursorStyle}  onClick={e=>this.clickable(e,a)} >Porfolio</a>
                          </Muted>
                          <p className={classes.description}>
                            Don't be scared of the truth because we need to restart the
                            human foundation. And I love you like Kanye loves Kanye.
                          </p>
                        </CardBody>
                        <CardFooter profile className={classes.justifyContent}>
                          <Button
                            href="#pablo"
                            justIcon
                            simple
                            color="twitter"
                            className={classes.btn}
                            onClick={e => e.preventDefault()}
                          >
                            <i className="fab fa-twitter" />
                          </Button>
                          <Button
                            href="#pablo"
                            justIcon
                            simple
                            color="dribbble"
                            className={classes.btn}
                            onClick={e => e.preventDefault()}
                          >
                            <i className="fab fa-dribbble" />
                          </Button>
                          <Button
                            href="#pablo"
                            justIcon
                            simple
                            color="linkedin"
                            className={classes.btn}
                            onClick={e => e.preventDefault()}
                          >
                            <i className="fab fa-linkedin" />
                          </Button>
                        </CardFooter>
                      </Card>
                    </GridItem>
                  )
                } )
              }
            </GridContainer>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(teamsStyle)(SectionTeams);
